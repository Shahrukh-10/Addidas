const mongoose = require("mongoose");
const { Schema } = mongoose;

const allShoes = new Schema({
  shoeName: { type: String, required: true },
  shoeDescreption: { type: String, required: true },
  shoeBrand: { type: String, required: true },
  shoePrice: { type: Number, required: true },
  shoeAddedDate: { type: Date, default: Date.now },
  shoeInStock: { type: Boolean, default: true },
  shoeShowInComponets: { type: Boolean, default: false },
});

module.exports = mongoose.model("shoes", allShoes);
