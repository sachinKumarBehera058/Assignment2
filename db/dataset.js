const mongoose = require('mongoose');
const caps_sell = require('../models/product');

mongoose.connect('mongodb+srv://admin:admin@sachincluster.yrpwpdu.mongodb.net/Sachincluster?retryWrites=true&w=majority');

const sampleData =[
    {
        title: "The Cash Cow",
        price: 40,
        variants: [
          { color: "Blue", image: "https://www.goorin.com/cdn/shop/products/101-0383-BLU-F01_750x.jpg?v=1691615687" },
          { color: "Orange", image: "https://www.goorin.com/cdn/shop/files/101-0383-KHA-F01_750x.jpg?v=1691615687" },
        ],
        rating: 3,
      },
      {
        title: "The Freedom Eagle",
        price: 40,
        variants: [
          { color: "Green", image: "https://www.goorin.com/cdn/shop/files/101-0384-CAM-F01_1_375x.jpg?v=1692724951" },
          { color: "Indigo", image: "https://www.goorin.com/cdn/shop/files/101-0384-IND-F01_375x.jpg?v=1692724951" },
        ],
        rating: 4,
      },
      {
        title: "The GOAT",
        price: 40,
        variants: [
          { color: "Black", image: "https://www.goorin.com/cdn/shop/products/101-0385-CHA-F01_375x.jpg?v=1672857824" },
          { color: "Green", image: "https://www.goorin.com/cdn/shop/files/101-0385-GRE-F01_375x.jpg?v=1683670622" },
          { color: "Brown", image: "https://www.goorin.com/cdn/shop/products/101-0385-KHA-F01_375x.jpg?v=1672857824" },
        ],
        rating: 5,
      },
      {
        title: "The King Lion",
        price: 40,
        variants: [
          { color: "Brown", image: "https://www.goorin.com/cdn/shop/products/101-0388-WKY-F01_375x.jpg?v=1646687534" },
          { color: "red", image: "https://www.goorin.com/cdn/shop/files/101-0388-BRO-F01_375x.jpg?v=1683671127" },
          { color: "Yellow", image: "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?v=1647627351" },
        ],
        rating: 3.5,
      },
      {
        title: "The Queen Bee",
        price: 40,
        variants: [
          { color: "Black", image: "https://www.goorin.com/cdn/shop/products/101-0391-BLK-F01_375x.jpg?v=1690232648" },
          { color: "White", image: "https://www.goorin.com/cdn/shop/files/101-0391-BKW-F01_375x.jpg?v=1700697747" },
          { color: "Grey", image: "https://www.goorin.com/cdn/shop/products/101-0391-SLA-F01_375x.jpg?v=1656457902" },
          { color: "Red", image: "https://www.goorin.com/cdn/shop/files/101-0391-WIN-F01_375x.jpg?v=1698964302" }
        ],
        rating: 5,
      },
      {
        title: "The White Tiger",
        price: 40,
        variants: [
          { color: "Green", image: "https://www.goorin.com/cdn/shop/products/101-0392-GRE-F01_375x.jpg?v=1674141781" },
        ],
        rating: 4.5,
      },
      {
        title: "The Killer Tiger",
        price: 40,
        variants: [
          { color: "White", image: "https://www.goorin.com/cdn/shop/files/101-0421-WHI-F01_375x.jpg?v=1694637581" },
        ],
        rating: 4,
      },
      {
        title: "The Boss",
        price: 40,
        variants: [
          { color: "Black", image: "https://www.goorin.com/cdn/shop/products/101-0512-CHA-F01_375x.jpg?v=1690925718" },
          { color: "Red", image: "https://www.goorin.com/cdn/shop/products/101-0512-WIN-F01_375x.jpg?v=1657919762" },
        ],
        rating: 3,
      },
      {
        title: "The Baddest Boy",
        price: 40,
        variants: [
          { color: "Blue", image: "https://www.goorin.com/cdn/shop/files/101-0493-BLU-F01_375x.jpg?v=1698965026" },
          { color: "White", image: "https://www.goorin.com/cdn/shop/products/101-0493-WHI-F01_375x.jpg?v=1690926039" },
        ],
        rating: 3.5,
      },
      
    ];

async function insertSampleData() {
    try {
        // await caps_sell.deleteMany();
        // console.log("data deleted");
        await caps_sell.insertMany(sampleData);
        console.log('data inserted successfully!');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    } finally {
        mongoose.connection.close();
    }
}

insertSampleData();