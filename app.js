const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {gownmodel}=require("./models/gown")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input=req.body
    let gown=new gownmodel(input)
    gown.save()
    console.log(gown)
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    res.send("Search")
})

app.post("/view",(req,res)=>{
    res.send("View")
})

app.listen(8080,()=>{
    console.log("server started")
})