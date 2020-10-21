const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const errorHandler = require('./middleware/error')
const cors = require('cors');

require('dotenv').config();

// Route files
const shopRoutes = require('./routes/shop.js');
const adminRoutes = require('./routes/admin.js');

// Connect to database
const connectDB = require('./config/db');
connectDB();

const app = express();

// Security measure for targeted attacks
app.disable('x-powered-by');

app.use(express.json());
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routes
app.use(adminRoutes);
app.use('/api/v1/products', shopRoutes);
app.use(errorHandler)

// Add production SPA work around
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

