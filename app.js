// app.js
require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const connectDB = require("./db/connect");
const Product = require("./models/product");  // Assuming you have a Product model

connectDB();

const PORT = process.env.PORT || 5000;
app.use(cors());

const products_routes = require("./routes/products");
app.use("/api/products", products_routes);

app.get("/", (req, res) => {
    res.send("Hi sachin, I am Live");
});

app.listen(PORT, () => {
    console.log(`${PORT} Yes I am connected`);
});
