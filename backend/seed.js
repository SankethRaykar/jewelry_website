const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function seed() {
  console.log('Starting seed...');

  try {
    // Insert categories
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .insert([
        { name: 'Necklaces' },
        { name: 'Earrings' },
        { name: 'Bangles' },
        { name: 'Rings' }
      ])
      .select();

    if (catError) throw catError;
    console.log('Categories seeded.');

    // Insert products
    const products = Array.from({ length: 10 }).map((_, i) => {
      const mrp = 5000 + i * 1000;
      const sale_price = mrp - 500;
      return {
        name: `Ethnic Kundan Set ${i + 1}`,
        mrp,
        sale_price,
        discount_percent: Math.round(((mrp - sale_price) / mrp) * 100),
        category_id: categories[i % 4].id,
        stock: 10,
        is_active: true,
        images: ['https://via.placeholder.com/400x400.webp?text=Jewelry']
      };
    });

    const { error: prodError } = await supabase
      .from('products')
      .insert(products);

    if (prodError) throw prodError;
    console.log('Products seeded.');

    // Insert coupons
    const { error: couponError } = await supabase
      .from('coupons')
      .insert([
        { code: 'WELCOME10', type: 'percent', value: 10, min_order_value: 1000 },
        { code: 'FLAT500', type: 'flat', value: 500, min_order_value: 2000 }
      ]);

    if (couponError) throw couponError;
    console.log('Coupons seeded.');

    // Note: Admin user creation using Supabase Admin Auth API
    const { data: adminUser, error: authError } = await supabase.auth.admin.createUser({
      email: 'admin@blinglux.com',
      password: 'Admin@123',
      email_confirm: true,
      user_metadata: { full_name: 'BlingLux Admin' }
    });

    if (authError) {
      if (authError.message.includes('already exists')) {
        console.log('Admin user already exists.');
      } else {
        throw authError;
      }
    } else {
      console.log('Admin user created.');
      // Make sure the profile is set as admin
      const { error: roleError } = await supabase
        .from('profiles')
        .update({ role: 'admin' })
        .eq('id', adminUser.user.id);
      
      if (roleError) throw roleError;
      console.log('Admin role assigned.');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Seed error:', error);
  }
}

seed();
