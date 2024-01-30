// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;  

    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / pageSize);

    const products = await Product.find()
      .skip((page - 1) * pageSize)  
      .limit(pageSize);  

    res.json({
      products,
      pagination: {
        totalProducts,
        totalPages,
        currentPage: page,
        pageSize,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
