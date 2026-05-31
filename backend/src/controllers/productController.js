const supabase = require('../config/supabase');
const redis = require('../config/redis');

const getProducts = async (req, res) => {
  try {
    // Try to get from cache first
    if (redis) {
      const cachedProducts = await redis.get('products:all');
      if (cachedProducts) {
        return res.json(cachedProducts);
      }
    }

    const { data: products, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (
          id,
          name
        )
      `)
      .eq('is_active', true);

    if (error) throw error;

    // Cache the result for 5 minutes
    if (redis) {
      await redis.setex('products:all', 300, JSON.stringify(products));
    }

    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (redis) {
      const cached = await redis.get(`product:${id}`);
      if (cached) return res.json(cached);
    }

    const { data: product, error } = await supabase
      .from('products')
      .select('*, categories(id, name)')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!product) return res.status(404).json({ error: 'Product not found' });

    if (redis) {
      await redis.setex(`product:${id}`, 300, JSON.stringify(product));
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    
    // Auto-calculate discount if mrp and sale_price provided
    if (newProduct.mrp && newProduct.sale_price) {
      newProduct.discount_percent = Math.round(((newProduct.mrp - newProduct.sale_price) / newProduct.mrp) * 100);
    }

    const { data, error } = await supabase
      .from('products')
      .insert([newProduct])
      .select();

    if (error) throw error;
    
    if (redis) {
      await redis.del('products:all'); // Invalidate cache
    }

    res.status(201).json(data[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct
};
