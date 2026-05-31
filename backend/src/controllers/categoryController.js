const supabase = require('../config/supabase');
const redis = require('../config/redis');

const getCategories = async (req, res) => {
  try {
    if (redis) {
      const cached = await redis.get('categories:all');
      if (cached) return res.json(cached);
    }

    const { data: categories, error } = await supabase
      .from('categories')
      .select('*');

    if (error) throw error;

    if (redis) {
      await redis.setex('categories:all', 3600, JSON.stringify(categories)); // Cache for 1 hour
    }

    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

const createCategory = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('categories')
      .insert([req.body])
      .select();

    if (error) throw error;

    if (redis) await redis.del('categories:all');

    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create category' });
  }
};

module.exports = {
  getCategories,
  createCategory
};
