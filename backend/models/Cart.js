const mongoose = require("mongoose");
const { Schema } = mongoose;

const Cart = new Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      products: [
        {
          quantity: { type: Number , default:0},
          name: String,
          price: Number,
          _id: String
        }
      ],
      modifiedOn: {
        type: Date,
        default: Date.now
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
