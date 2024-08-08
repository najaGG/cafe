const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors'); //เอาไว้ตอน deploy

//ของpostman เอาไว้เทสapi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//

//เอาไว้เรียก api ย่อย จะเพิ่ม api เพิ่มตรงนี้
app.use("/api/v1/employee/",require("./api_employee"))
app.use("/api/v1/sss/",require("./api_sss"))
//

//
app.use(cors());
//

/* ใส่แล้ว user จะสามารถเข้าถึงไฟล์ใน folder ที่กำหนดได้ แต่ถ้าไม่ใส่ user จะเข้าถึงได้แม้กระทั้ง source code
//app.use(express.static(__dirname,'/ชื่อโฟลเดอร์')); 
*/

//run node
app.listen(8085,()=>{
    console.log("Backend is running...")
})