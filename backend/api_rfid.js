const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const rfidData = req.body.rfidData;
    const timestamp = new Date();

    // คุณสามารถจัดเก็บหรือประมวลผลข้อมูล rfidData นี้ก่อน
    console.log("Received RFID Data: ", rfidData, "at", timestamp);

    // ส่งข้อมูลนี้ไปยัง React ผ่าน WebSocket หรืออื่นๆ ที่คุณต้องการ
    res.json({ success: true, message: "RFID data received successfully", data: { rfid: rfidData, timestamp } });
});

module.exports = router;
