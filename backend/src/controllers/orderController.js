const supabase = require('../config/supabase');
const razorpay = require('../config/razorpay');
const crypto = require('crypto');

const createOrder = async (req, res) => {
  try {
    const { items, total_amount, shipping_address, coupon_applied } = req.body;
    const user_id = req.user.id;

    // 1. Create order in DB first (pending status)
    const { data: order, error } = await supabase
      .from('orders')
      .insert([{
        user_id,
        items,
        total_amount,
        shipping_address,
        coupon_applied,
        status: 'pending',
        payment_status: 'pending'
      }])
      .select()
      .single();

    if (error) throw error;

    // 2. Create Razorpay order
    const options = {
      amount: Math.round(total_amount * 100), // amount in smallest currency unit (paise)
      currency: 'INR',
      receipt: `receipt_order_${order.id}`
    };

    const rzpOrder = await razorpay.orders.create(options);

    res.status(201).json({
      orderId: order.id,
      razorpayOrderId: rzpOrder.id,
      amount: options.amount,
      currency: options.currency
    });
  } catch (err) {
    console.error('Create order error:', err);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, order_id } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Update order status in DB
      const { error } = await supabase
        .from('orders')
        .update({ payment_status: 'paid', status: 'processing' })
        .eq('id', order_id);

      if (error) throw error;

      // TODO: Send order confirmation email via Resend

      res.status(200).json({ success: true, message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ success: false, error: 'Invalid payment signature' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to verify payment' });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const { data: orders, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', req.user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
  getUserOrders
};
