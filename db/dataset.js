const mongoose = require('mongoose');
const caps_sell = require('../models/product');

mongoose.connect('mongodb+srv://admin:admin@sachincluster.yrpwpdu.mongodb.net/Sachincluster?retryWrites=true&w=majority');

const sampleData =[
        {
            "model": "The Cash Cow",
            "listPrice": 40,
            "colors": "Blue",
            "image": "https://www.goorin.com/cdn/shop/products/101-0383-BLU-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Cash Cow",
            "listPrice": 40,
            "colors": "Khaki",
            "image": "https://www.goorin.com/cdn/shop/files/101-0383-KHA-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Freedom Eagle",
            "listPrice": 40,
            "colors": "Camouflage",
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-CAM-F01_1_375x.jpg?v=1692724951"
        },
        {
            "model": "The Freedom Eagle",
            "listPrice": 40,
            "colors": "Indigo",
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-IND-F01_375x.jpg?v=1692724951"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Charcoal",
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-CHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Green",
            "image": "https://www.goorin.com/cdn/shop/files/101-0385-GRE-F01_375x.jpg?v=1683670622"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Khaki",
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-KHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Brown",
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-WKY-F01_375x.jpg?v=1646687534"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Whiskey",
            "image": "https://www.goorin.com/cdn/shop/files/101-0388-BRO-F01_375x.jpg?v=1683671127"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Yellow",
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?v=1647627351"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Black",
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-BLK-F01_375x.jpg?v=1690232648"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Black White",
            "image": "https://www.goorin.com/cdn/shop/files/101-0391-BKW-F01_375x.jpg?v=1700697747"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Slate",
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-SLA-F01_375x.jpg?v=1656457902"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Wine",
            "image": "https://www.goorin.com/cdn/shop/files/101-0391-WIN-F01_375x.jpg?v=1698964302"
        },
        {
            "model": "The White Tiger",
            "listPrice": 40,
            "colors": "Green",
            "image": "https://www.goorin.com/cdn/shop/products/101-0392-GRE-F01_375x.jpg?v=1674141781"
        },
        {
            "model": "The Killer Tiger",
            "listPrice": 40,
            "colors": "White",
            "image": "https://www.goorin.com/cdn/shop/files/101-0421-WHI-F01_375x.jpg?v=1694637581"
        },
        {
            "model": "The Boss",
            "listPrice": 40,
            "colors": "Charcoal",
            "image": "https://www.goorin.com/cdn/shop/products/101-0512-CHA-F01_375x.jpg?v=1690925718"
        },
        {
            "model": "The Boss",
            "listPrice": 30000,
            "colors": "wine",
            "image": "https://www.goorin.com/cdn/shop/products/101-0512-WIN-F01_375x.jpg?v=1657919762"
        },
        {
            "model": "The Baddest Boy",
            "listPrice": 40,
            "colors": "Blue",
            "image": "https://www.goorin.com/cdn/shop/files/101-0493-BLU-F01_375x.jpg?v=1698965026"
        },
        {
            "model": "The Baddest Boy",
            "listPrice": 40,
            "colors": "White",
            "image": "https://www.goorin.com/cdn/shop/products/101-0493-WHI-F01_375x.jpg?v=1690926039"
        },
        {
            "model": "The Cash Cow",
            "listPrice": 40,
            "colors": "Blue",
            "image": "https://www.goorin.com/cdn/shop/products/101-0383-BLU-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Cash Cow",
            "listPrice": 40,
            "colors": "Khaki",
            "image": "https://www.goorin.com/cdn/shop/files/101-0383-KHA-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Freedom Eagle",
            "listPrice": 40,
            "colors": "Camouflage",
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-CAM-F01_1_375x.jpg?v=1692724951"
        },
        {
            "model": "The Freedom Eagle",
            "listPrice": 40,
            "colors": "Indigo",
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-IND-F01_375x.jpg?v=1692724951"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Charcoal",
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-CHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Green",
            "image": "https://www.goorin.com/cdn/shop/files/101-0385-GRE-F01_375x.jpg?v=1683670622"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Khaki",
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-KHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Brown",
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-WKY-F01_375x.jpg?v=1646687534"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Whiskey",
            "image": "https://www.goorin.com/cdn/shop/files/101-0388-BRO-F01_375x.jpg?v=1683671127"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Yellow",
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?v=1647627351"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Black",
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-BLK-F01_375x.jpg?v=1690232648"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Slate",
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-SLA-F01_375x.jpg?v=1656457902"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Slate",
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-SLA-F01_375x.jpg?v=1656457902"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Wine",
            "image": "https://www.goorin.com/cdn/shop/files/101-0391-WIN-F01_375x.jpg?v=1698964302"
        },
        {
            "model": "The White Tiger",
            "listPrice": 40,
            "colors": "Green",
            "image": "https://www.goorin.com/cdn/shop/products/101-0392-GRE-F01_375x.jpg?v=1674141781"
        },
        {
            "model": "The Cash Cow",
            "listPrice": 40,
            "colors": "Khaki",
            "image": "https://www.goorin.com/cdn/shop/files/101-0383-KHA-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Freedom Eagle",
            "listPrice": 40,
            "colors": "Camouflage",
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-CAM-F01_1_375x.jpg?v=1692724951"
        },
        {
            "model": "The Freedom Eagle",
            "listPrice": 40,
            "colors": "Indigo",
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-IND-F01_375x.jpg?v=1692724951"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Charcoal",
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-CHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Green",
            "image": "https://www.goorin.com/cdn/shop/files/101-0385-GRE-F01_375x.jpg?v=1683670622"
        },
        {
            "model": "The GOAT",
            "listPrice": 40,
            "colors": "Khaki",
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-KHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Brown",
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-WKY-F01_375x.jpg?v=1646687534"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Whiskey",
            "image": "https://www.goorin.com/cdn/shop/files/101-0388-BRO-F01_375x.jpg?v=1683671127"
        },
        {
            "model": "The King Lion",
            "listPrice": 40,
            "colors": "Yellow",
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?v=1647627351"
        },
        {
            "model": "The Queen Bee",
            "listPrice": 40,
            "colors": "Black",
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-BLK-F01_375x.jpg?v=1690232648"
        },
    ];


async function insertSampleData() {
    try {
        await caps_sell.insertMany(sampleData);
        console.log('OEM data inserted successfully!');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    } finally {
        mongoose.connection.close();
    }
}

insertSampleData();