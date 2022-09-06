const mongoose = require("mongoose");

// create player schema (attributes)

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
   
})
const user = mongoose.model("User",userSchema)
module.exports= user