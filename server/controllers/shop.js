const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/product');

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getMany = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, count: products.length, products: products });
});

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
exports.getOne = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: product });
});

// @desc    Create new product
// @route   GET /api/v1/products
// @access  Private
exports.createOne = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    data: product
  })
});

// @desc    Update product
// @route   GET /api/v1/products/:id
// @access  Private
exports.updateOne = asyncHandler(async (req, res, next) => {
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
});

// @desc    Delete a product
// @route   GET /api/v1/products/:id
// @access  Private
exports.removeOne = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});



