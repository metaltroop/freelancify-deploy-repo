const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const {home, register}=require("../controllers/auth-contoller")


router.route("/").get((req, res) => {
    res.status(200).send("hi from auth-register.js");
});

router.route("/register").get(register);

module.exports = router;