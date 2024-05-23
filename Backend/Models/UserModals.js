const mongoose = require("mongoose")

const userScehama = mongoose.Schema({
    name:String,
    email:String,
    address:String,
    password:String,
    gender:String
})

const usermodel = mongoose.model("Register-User-data",userScehama)

module.exports={usermodel}
