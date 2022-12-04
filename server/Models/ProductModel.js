import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    title: { type: String},
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image01: {
      type: String,
    },
    image02: {
      type: String,
    },
    image03: {
      type: String,
      
    },
    image04: {
      type: String,
      
    },
    description: { type: String },

    categorySlug: {
      type: String,
      required: true,
    },
   
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    colors: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
