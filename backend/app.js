
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const cors= require('cors')

// Middleware
app.use(bodyParser.json());
// Use cors middleware
app.use(cors());

// Routes
const userRoutes = require('./routes/userRoutes');
// const categoryRoutes = require('./routes/categoryRoutes');
// const subcategoryRoutes = require('./routes/subcategoryRoutes');
// const productRoutes = require('./routes/productRoutes');

app.use('/api/users', userRoutes);
// app.use('/categories', categoryRoutes);
// app.use('/subcategories', subcategoryRoutes);
// app.use('/products', productRoutes);


// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});