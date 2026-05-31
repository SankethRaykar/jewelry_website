const supabase = require('../config/supabase');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // Optimize image using sharp
    const optimizedBuffer = await sharp(req.file.buffer)
      .resize(800, 800, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toBuffer();

    const fileName = `${uuidv4()}.webp`;
    const filePath = `public/${fileName}`;

    const { data, error } = await supabase
      .storage
      .from('blinglux_assets')
      .upload(filePath, optimizedBuffer, {
        contentType: 'image/webp',
        upsert: false
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase
      .storage
      .from('blinglux_assets')
      .getPublicUrl(filePath);

    res.status(200).json({ url: publicUrlData.publicUrl });
  } catch (err) {
    console.error('Error uploading image:', err);
    res.status(500).json({ error: 'Failed to upload image' });
  }
};

module.exports = {
  uploadImage
};
