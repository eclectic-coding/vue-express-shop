const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')

require('dotenv').config();
console.log(process.env.MONGO_URI);

const Product = require('./models/product')

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON file
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/data/products.json`, 'utf-8')
)
console.log(products);

// Import into DB
const importData = async () => {
  try {
    await Product.create(products);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}


