const express = require('express');
const { getMany, createOne, getOne, updateOne, removeOne } = require('../controllers/shop.js');

const router = express.Router();

router.route('/')
  .get(getMany)
  .post(createOne);

router.route('/:id')
  .get(getOne)
  .put(updateOne)
  .delete(removeOne);

module.exports = router;
