const mongoose = require("mongoose");
require('dotenv').config()

const mongoURI =
  `mongodb+srv://shahrukh:${process.env.PRIVATE_KEY}@cluster0.6g5mqoi.mongodb.net/?retryWrites=true&w=majority`;

  const connectToMongo = ()=>{
      mongoose.connect(mongoURI , ()=>{
          console.log("Connected to mongo successfully.");
      })
  }

  module.exports = connectToMongo;