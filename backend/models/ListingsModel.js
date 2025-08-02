const mongoose = require("mongoose");
const ListingsSchema = require("../schemas/ListingsSchema");

const ListingsModel = mongoose.model("Listing", ListingsSchema); // Capitalized "Listing"
module.exports = ListingsModel;
