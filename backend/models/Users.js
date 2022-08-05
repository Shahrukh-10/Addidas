const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    mobileNumber: { type: Number, trim: true },
    subscribed: { type: Boolean, default:false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
