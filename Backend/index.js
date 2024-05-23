const express = require("express")
const { connection } = require("./db")
const cors = require("cors")
const { registerroutes } = require("./Routes/UserRoutes")
const { newRecordsRoutes } = require("./Routes/NewRecordsRoutes")
const app = express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("App is WORKING")
})

app.use("/user",registerroutes)
app.use("/records",newRecordsRoutes)


app.listen(3500,async(req,res)=>{
    try {
        await connection
        console.log("PORT STARTED 3500")
    } catch (error) {
        console.log(error);
    }
    console.log("Connected at port 3500");
})