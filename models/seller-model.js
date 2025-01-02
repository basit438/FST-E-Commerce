const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
   fullName: String,
   email: String,
   password: String,
   products : {
    type : Array,
    default : []
   },
   gstin : Number,
   picture : String,

});

module.exports = mongoose.model("Seller", sellerSchema);