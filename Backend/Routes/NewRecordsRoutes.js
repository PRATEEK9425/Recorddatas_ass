const express = require("express")
const { newrecord_model } = require("../Models/NewRecordsModals")

const newRecordsRoutes = express.Router()


newRecordsRoutes.get("/allrec",async(req,res)=>{
    try {
        const data = await newrecord_model.find()
        res.send(data)
    } catch (error) {
        res.send(error)
        res.send("Err While getting Records")
    }
})


newRecordsRoutes.get("/singlerec/:id",async(req,res)=>{
    const ID = req.params.id
    try {
        const data = await newrecord_model.findOne({_id:ID})
res.send(data)
    } catch (error) {
        console.log(error);
        res.send("Not able to get single Error")
    }
})

newRecordsRoutes.get("/searchname/:name",async(req,res)=>{
    const NAME = req.params.name
    try {
        const data = await newrecord_model.find({name:NAME})
res.send(data)
    } catch (error) {
        console.log(error);
        res.send("Not able to get single Error")
    }
})

newRecordsRoutes.get("/filter/:IsActive",async(req,res)=>{
    const isactive = req.params.IsActive
    try {
        const data = await newrecord_model.find({IsActive:isactive})
res.send(data)
    } catch (error) {
        console.log(error);
        res.send("Not able to get single Error")
    }
})



newRecordsRoutes.post("/create",async(req,res)=>{
    const payload = req.body
try {
    const data = new newrecord_model(payload)
    await data.save()
    res.send("New Record Added")
} catch (error) {
    console.log(error);
    res.send("Not able To Post newRecords")
}


})

newRecordsRoutes.patch("/update/:id",async(req,res)=>{
    const ID = req.params.id
    const payload = req.body
    try{
  await newrecord_model.findByIdAndUpdate({_id:ID},payload)
  res.send("Data Updated successfully")
    }catch(err){
  console.log(err)
    }
  
  })

newRecordsRoutes.delete("/remove/:id",async(req,res)=>{
    const ID = req.params.id 
    try {
        await newrecord_model.findByIdAndDelete({_id:ID})
    } catch (error) {
        console.log(error);
res.send("Not able to delete")
    }
})


module.exports={
    newRecordsRoutes
}