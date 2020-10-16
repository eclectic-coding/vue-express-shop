const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please add a Product title']
  },
  slug: String,
  price: {
    type: Number,
    required: [true, 'Please add a Product price']
  },
  description: {
    type: String,
    required: [true, 'Please add a Product description'],
    maxlength: [500, 'Description can not be more than 500 characters']
  },
  imageUrl: {
    type: String,
    required: true
  }
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
});

// Create product slug from the title
productSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  // console.log('Slugify ran', this.title);
  next();

});

module.exports = mongoose.model('Product', productSchema);
