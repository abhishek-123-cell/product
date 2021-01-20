const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 32,
      required: true,
    },
    description: {
      type: String,

      maxlength: 3200,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      maxlength: 32,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",

      required: true,
    },
    quantity: {
      type: Number,
    },
    // sold: {
    //   type: Number,
    //   default: 0,
    // },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      required: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
