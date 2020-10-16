const ErrorResponse = require('../utils/errorResponse');
const Product = require('../models/product');

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getMany = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: false, count: products.length, data: products });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
exports.getOne = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(
        new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    // res.status(400).json({ success: false });
    next(err);
  }
};

// @desc    Create new product
// @route   GET /api/v1/products
// @access  Private
exports.createOne = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl
  });
  product
    .save()
    .then(() => {
      console.log('Created product');
    })
    .catch((err) => {
      next(err);
    });

};

// @desc    Update product
// @route   GET /api/v1/products/:id
// @access  Private
exports.updateOne = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!product) {
      return next(
        new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a product
// @route   GET /api/v1/products/:id
// @access  Private
exports.removeOne = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return next(
        new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};



