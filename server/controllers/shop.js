// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
exports.getMany = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Index of products' });
}

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
exports.getOne = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Get one product' });
}

// @desc    Create new product
// @route   GET /api/v1/products
// @access  Private
exports.createOne = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Admin to create a new product' });
}

// @desc    Update product
// @route   GET /api/v1/products/:id
// @access  Private
exports.updateOne = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Admin to update a product' });
}

// @desc    Delete a product
// @route   GET /api/v1/products/:id
// @access  Private
exports.removeOne = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Admin to delete a product' });
}



