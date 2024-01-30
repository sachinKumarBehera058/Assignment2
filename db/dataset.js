const mongoose = require('mongoose');
const OEM_Specs = require('../models/product');

mongoose.connect('mongodb+srv://admin:admin@sachincluster.yrpwpdu.mongodb.net/Sachincluster?retryWrites=true&w=majority');

const sampleData =[
        {
            "model": "The Cash Cow",
            "year": 2017,
            "listPrice": 40,
            "colors": "Blue",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/products/101-0383-BLU-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Cash Cow",
            "year": 2017,
            "listPrice": 40,
            "colors": "Khaki",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0383-KHA-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Freedom Eagle",
            "year": 2017,
            "listPrice": 40,
            "colors": "Camouflage",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-CAM-F01_1_375x.jpg?v=1692724951"
        },
        {
            "model": "The Freedom Eagle",
            "year": 2017,
            "listPrice": 40,
            "colors": "Indigo",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-IND-F01_375x.jpg?v=1692724951"
        },
        {
            "model": "The GOAT",
            "year": 2017,
            "listPrice": 40,
            "colors": "Charcoal",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-CHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The GOAT",
            "year": 2019,
            "listPrice": 40,
            "colors": "Green",
            "mileage": 20.5,
            "powerBHP": 180,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/files/101-0385-GRE-F01_375x.jpg?v=1683670622"
        },
        {
            "model": "The GOAT",
            "year": 2016,
            "listPrice": 40,
            "colors": "Khaki",
            "mileage": 21.0,
            "powerBHP": 150,
            "maxSpeed": 190,
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-KHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The King Lion",
            "year": 2021,
            "listPrice": 40,
            "colors": "Brown",
            "mileage": 25.0,
            "powerBHP": 220,
            "maxSpeed": 240,
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-WKY-F01_375x.jpg?v=1646687534"
        },
        {
            "model": "The King Lion",
            "year": 2019,
            "listPrice": 40,
            "colors": "Whiskey",
            "mileage": 18.0,
            "powerBHP": 280,
            "maxSpeed": 230,
            "image": "https://www.goorin.com/cdn/shop/files/101-0388-BRO-F01_375x.jpg?v=1683671127"
        },
        {
            "model": "The King Lion",
            "year": 2018,
            "listPrice": 40,
            "colors": "Yellow",
            "mileage": 19.5,
            "powerBHP": 170,
            "maxSpeed": 210,
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?v=1647627351"
        },
        {
            "model": "The Queen Bee",
            "year": 2017,
            "listPrice": 40,
            "colors": "Black",
            "mileage": 17.5,
            "powerBHP": 160,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-BLK-F01_375x.jpg?v=1690232648"
        },
        {
            "model": "The Queen Bee",
            "year": 2016,
            "listPrice": 40,
            "colors": "Black White",
            "mileage": 20.0,
            "powerBHP": 180,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/files/101-0391-BKW-F01_375x.jpg?v=1700697747"
        },
        {
            "model": "The Queen Bee",
            "year": 2019,
            "listPrice": 40,
            "colors": "Slate",
            "mileage": 22.5,
            "powerBHP": 150,
            "maxSpeed": 190,
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-SLA-F01_375x.jpg?v=1656457902"
        },
        {
            "model": "The Queen Bee",
            "year": 2018,
            "listPrice": 40,
            "colors": "Wine",
            "mileage": 21.0,
            "powerBHP": 160,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/files/101-0391-WIN-F01_375x.jpg?v=1698964302"
        },
        {
            "model": "The White Tiger",
            "year": 2020,
            "listPrice": 40,
            "colors": "Green",
            "mileage": 23.5,
            "powerBHP": 200,
            "maxSpeed": 210,
            "image": "https://www.goorin.com/cdn/shop/products/101-0392-GRE-F01_375x.jpg?v=1674141781"
        },
        {
            "model": "The Killer Tiger",
            "year": 2016,
            "listPrice": 40,
            "colors": "White",
            "mileage": 18.5,
            "powerBHP": 150,
            "maxSpeed": 195,
            "image": "https://www.goorin.com/cdn/shop/files/101-0421-WHI-F01_375x.jpg?v=1694637581"
        },
        {
            "model": "The Boss",
            "year": 2018,
            "listPrice": 40,
            "colors": "Charcoal",
            "mileage": 19.0,
            "powerBHP": 160,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/products/101-0512-CHA-F01_375x.jpg?v=1690925718"
        },
        {
            "model": "The Boss",
            "year": 2019,
            "listPrice": 30000,
            "colors": "wine",
            "mileage": 22.0,
            "powerBHP": 180,
            "maxSpeed": 210,
            "image": "https://www.goorin.com/cdn/shop/products/101-0512-WIN-F01_375x.jpg?v=1657919762"
        },
        {
            "model": "The Baddest Boy",
            "year": 2017,
            "listPrice": 40,
            "colors": "Blue",
            "mileage": 20.5,
            "powerBHP": 170,
            "maxSpeed": 205,
            "image": "https://www.goorin.com/cdn/shop/files/101-0493-BLU-F01_375x.jpg?v=1698965026"
        },
        {
            "model": "The Baddest Boy",
            "year": 2020,
            "listPrice": 40,
            "colors": "White",
            "mileage": 25.5,
            "powerBHP": 220,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/products/101-0493-WHI-F01_375x.jpg?v=1690926039"
        },
        {
            "model": "The Cash Cow",
            "year": 2017,
            "listPrice": 40,
            "colors": "Blue",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/products/101-0383-BLU-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Cash Cow",
            "year": 2017,
            "listPrice": 40,
            "colors": "Khaki",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0383-KHA-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Freedom Eagle",
            "year": 2017,
            "listPrice": 40,
            "colors": "Camouflage",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-CAM-F01_1_375x.jpg?v=1692724951"
        },
        {
            "model": "The Freedom Eagle",
            "year": 2017,
            "listPrice": 40,
            "colors": "Indigo",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-IND-F01_375x.jpg?v=1692724951"
        },
        {
            "model": "The GOAT",
            "year": 2017,
            "listPrice": 40,
            "colors": "Charcoal",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-CHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The GOAT",
            "year": 2019,
            "listPrice": 40,
            "colors": "Green",
            "mileage": 20.5,
            "powerBHP": 180,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/files/101-0385-GRE-F01_375x.jpg?v=1683670622"
        },
        {
            "model": "The GOAT",
            "year": 2016,
            "listPrice": 40,
            "colors": "Khaki",
            "mileage": 21.0,
            "powerBHP": 150,
            "maxSpeed": 190,
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-KHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The King Lion",
            "year": 2021,
            "listPrice": 40,
            "colors": "Brown",
            "mileage": 25.0,
            "powerBHP": 220,
            "maxSpeed": 240,
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-WKY-F01_375x.jpg?v=1646687534"
        },
        {
            "model": "The King Lion",
            "year": 2019,
            "listPrice": 40,
            "colors": "Whiskey",
            "mileage": 18.0,
            "powerBHP": 280,
            "maxSpeed": 230,
            "image": "https://www.goorin.com/cdn/shop/files/101-0388-BRO-F01_375x.jpg?v=1683671127"
        },
        {
            "model": "The King Lion",
            "year": 2018,
            "listPrice": 40,
            "colors": "Yellow",
            "mileage": 19.5,
            "powerBHP": 170,
            "maxSpeed": 210,
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?v=1647627351"
        },
        {
            "model": "The Queen Bee",
            "year": 2017,
            "listPrice": 40,
            "colors": "Black",
            "mileage": 17.5,
            "powerBHP": 160,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-BLK-F01_375x.jpg?v=1690232648"
        },
        {
            "model": "The Queen Bee",
            "year": 2019,
            "listPrice": 40,
            "colors": "Slate",
            "mileage": 22.5,
            "powerBHP": 150,
            "maxSpeed": 190,
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-SLA-F01_375x.jpg?v=1656457902"
        },
        {
            "model": "The Queen Bee",
            "year": 2019,
            "listPrice": 40,
            "colors": "Slate",
            "mileage": 22.5,
            "powerBHP": 150,
            "maxSpeed": 190,
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-SLA-F01_375x.jpg?v=1656457902"
        },
        {
            "model": "The Queen Bee",
            "year": 2018,
            "listPrice": 40,
            "colors": "Wine",
            "mileage": 21.0,
            "powerBHP": 160,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/files/101-0391-WIN-F01_375x.jpg?v=1698964302"
        },
        {
            "model": "The White Tiger",
            "year": 2020,
            "listPrice": 40,
            "colors": "Green",
            "mileage": 23.5,
            "powerBHP": 200,
            "maxSpeed": 210,
            "image": "https://www.goorin.com/cdn/shop/products/101-0392-GRE-F01_375x.jpg?v=1674141781"
        },
        {
            "model": "The Cash Cow",
            "year": 2017,
            "listPrice": 40,
            "colors": "Khaki",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0383-KHA-F01_750x.jpg?v=1691615687"
        },
        {
            "model": "The Freedom Eagle",
            "year": 2017,
            "listPrice": 40,
            "colors": "Camouflage",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-CAM-F01_1_375x.jpg?v=1692724951"
        },
        {
            "model": "The Freedom Eagle",
            "year": 2017,
            "listPrice": 40,
            "colors": "Indigo",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/files/101-0384-IND-F01_375x.jpg?v=1692724951"
        },
        {
            "model": "The GOAT",
            "year": 2017,
            "listPrice": 40,
            "colors": "Charcoal",
            "mileage": 15.0,
            "powerBHP": 350,
            "maxSpeed": 220,
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-CHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The GOAT",
            "year": 2019,
            "listPrice": 40,
            "colors": "Green",
            "mileage": 20.5,
            "powerBHP": 180,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/files/101-0385-GRE-F01_375x.jpg?v=1683670622"
        },
        {
            "model": "The GOAT",
            "year": 2016,
            "listPrice": 40,
            "colors": "Khaki",
            "mileage": 21.0,
            "powerBHP": 150,
            "maxSpeed": 190,
            "image": "https://www.goorin.com/cdn/shop/products/101-0385-KHA-F01_375x.jpg?v=1672857824"
        },
        {
            "model": "The King Lion",
            "year": 2021,
            "listPrice": 40,
            "colors": "Brown",
            "mileage": 25.0,
            "powerBHP": 220,
            "maxSpeed": 240,
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-WKY-F01_375x.jpg?v=1646687534"
        },
        {
            "model": "The King Lion",
            "year": 2019,
            "listPrice": 40,
            "colors": "Whiskey",
            "mileage": 18.0,
            "powerBHP": 280,
            "maxSpeed": 230,
            "image": "https://www.goorin.com/cdn/shop/files/101-0388-BRO-F01_375x.jpg?v=1683671127"
        },
        {
            "model": "The King Lion",
            "year": 2018,
            "listPrice": 40,
            "colors": "Yellow",
            "mileage": 19.5,
            "powerBHP": 170,
            "maxSpeed": 210,
            "image": "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?v=1647627351"
        },
        {
            "model": "The Queen Bee",
            "year": 2017,
            "listPrice": 40,
            "colors": "Black",
            "mileage": 17.5,
            "powerBHP": 160,
            "maxSpeed": 200,
            "image": "https://www.goorin.com/cdn/shop/products/101-0391-BLK-F01_375x.jpg?v=1690232648"
        },
    ];


async function insertSampleData() {
    try {
        await OEM_Specs.insertMany(sampleData);
        console.log('OEM data inserted successfully!');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    } finally {
        mongoose.connection.close();
    }
}

insertSampleData();