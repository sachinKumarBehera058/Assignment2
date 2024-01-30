const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  variants: [
    {
      color: {
        type: String,
        required: true,
      },
      image: {
        type: String, 
        required: true,
      },
    },
  ],
  rating: {
    type: Number,
    default: 0, 
  },
});

const Product = mongoose.model('caps_sell', productSchema);

module.exports = Product;

