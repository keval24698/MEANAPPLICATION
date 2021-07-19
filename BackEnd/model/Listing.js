const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
    {
        title:String,
        Name:String
    }
);

module.exports = mongoose.model("listings",listingSchema);