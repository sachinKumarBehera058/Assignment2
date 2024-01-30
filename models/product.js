const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  listPrice: {
    type: Number,
    required: true,
  },
  colors: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
  },
});

productSchema.index({ model: 'text' });

module.exports = mongoose.model('caps_sell', productSchema);
