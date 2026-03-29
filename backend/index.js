const express = require('express');
const cors = require('cors');
const products = require('./data.json');

const app = express();
// Use Render's port or default to 5000
const PORT = process.env.PORT || 5000;

app.use(cors());

// Route to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`🚀 Sachet-Go Backend is LIVE on port ${PORT}`);
});