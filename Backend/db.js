const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://nmpratik9425:pratik@cluster0.lmxe64s.mongodb.net/")

module.exports={
    connection
}