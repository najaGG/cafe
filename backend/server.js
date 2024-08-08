const express = require("express")
const app = express()

app.get("/register",(req,res)=>{
    res.end("hellowww")
})
app.get("/login",(req,res)=>{
    res.json({result:"aaaa"
        ,name:"ss"
    })
})
app.listen(8085,()=>{
    console.log("Backend is running...")
})