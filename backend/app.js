const express=require("express")
require("./DB/conn")

const mongoose=require('mongoose')
const app=express()
const cookieParser =require('cookie-parser')

app.use(cookieParser())



app.use(express.json())
    app.use(require("./post/auth"))
app.get("/",(req,res)=>{
    res.send("Welcome to the new journey")
})

app.get("/info",(req,res)=>{
    res.send("hii")
})


app.listen(5000,()=>{
    console.log("server is running at port number 5000")
})

