const express = require("express");
const router = express.Router()

router.get("/sss",(req, res)=>{
    res.json({result:"sss"})
})



module.exports = router;