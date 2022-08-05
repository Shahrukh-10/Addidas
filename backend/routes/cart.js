const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
let fetchuser = require("../middleware/fetchuser");

router.post("/cart", fetchuser, async (req, res) => {
  let success = false;
  try {
    const userId = req.user.id;
    const { productId , quantity } = req.body;
    let cart = await Cart.findOne({ userId });
    if (cart) {
      let itemIndex = cart.products.findIndex((p) => p._id == productId);
      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success, error: "Internal server error" });
  }
});

module.exports = router;
