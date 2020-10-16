const Product = require('../models/product');

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getMany = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.status(200).json({ success: false, count: products.length, data: products });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
exports.getOne = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new product
// @route   GET /api/v1/products
// @access  Private
exports.createOne = (req, res) => {
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
      console.log(err);
    });

};

// @desc    Update product
// @route   GET /api/v1/products/:id
// @access  Private
exports.updateOne = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!product) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete a product
// @route   GET /api/v1/products/:id
// @access  Private
exports.removeOne = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};



