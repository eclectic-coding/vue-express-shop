const express = require('express');
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan');
const cors = require('cors');

// Route files
const shopRoutes = require('./routes/shop.js');
const adminRoutes = require('./routes/admin.js');

// Load environment variables
dotenv.config({ path: './config/config.env'})

const app = express();

// Security measure for targeted attacks
app.disable('x-powered-by');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routes
app.use(adminRoutes);
app.use('/api/v1/products', shopRoutes);

// Add production SPA work around
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => (console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold)));
