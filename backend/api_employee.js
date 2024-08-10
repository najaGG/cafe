const express = require("express");
const router = express.Router()

router.get("/login", (req, res) => {
    res.json({ result: "login" });
});

router.post("/register", (req, res) => {
    const { id, firstName, lastName, password } = req.body;
    res.json({ result: "register", id, firstName, lastName, password });
});

module.exports = router;
