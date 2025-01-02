const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  description: String,
  discount :{
    type : Number,
    default : 0
  },
  bgcolor : String,
  textColor : String,
  panelColor : String
});

module.exports = mongoose.model("Product", productSchema);
