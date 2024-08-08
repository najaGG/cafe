const express = require("express");
const router = express.Router()

router.post("/login",(req, res)=>{
    res.json({result:"login"})
})

router.post("/register",(req, res)=>{
    const{idname,fname,lname,pname} = req.body //รับค่า

    res.json({result:"register",idname,fname,lname,pname}) //แสดงเป็ฯ json
})

module.exports = router;