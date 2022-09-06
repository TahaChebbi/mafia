const mongoose = require("mongoose");

// create player schema (attributes)

const stadiumSchema = mongoose.Schema({
    name:String,
    country:String,
    capacity:Number,
    foundation:Number
   
})
const stadium = mongoose.model("Stadium",stadiumSchema)
module.exports= stadium