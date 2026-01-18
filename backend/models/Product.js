const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  specs: {
    display: String,
    chip: String,
    camera: String,
    frontCamera: String,
    battery: String,
    storage: String,
    colors: String,
    features: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
