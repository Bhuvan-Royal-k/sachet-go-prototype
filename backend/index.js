const express = require('express');
const cors = require('cors');
const products = require('./data.json');

const app = express();

// CRITICAL FOR HOSTING: Render will provide a port via environment variables
const PORT = process.env.PORT || 5000;

// Allow the frontend to talk to this server
app.use(cors());

// The Products API
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`🚀 Sachet-Go Backend is LIVE on port ${PORT}`);
});