const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const products = require("./data/products");
app.get("/", (req, res) => {
  res.send("APP ");
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.listen(5000, console.log(`The app is running on localhost:5000`));
