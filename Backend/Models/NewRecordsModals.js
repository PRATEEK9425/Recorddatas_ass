const mongoose = require("mongoose")

const newrecords_schema = mongoose.Schema({
    name:String,
    description:String,
    category:String,
    IsActive:Boolean
})

const newrecord_model = mongoose.model("New-Records-data",newrecords_schema)


module.exports={newrecord_model}