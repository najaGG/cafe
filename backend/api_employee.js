const express = require("express");
const router = express.Router()

router.post("/login", (req, res) => {
    res.json({ result: "login" });
});

router.post("/register", (req, res) => {
    // รับค่าจากไคลเอนต์
    const { id, firstName, lastName, password } = req.body;

    // ส่งค่ากลับไปเป็น JSON
    res.json({ result: "register", id, firstName, lastName, password });
});

module.exports = router;
