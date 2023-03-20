const mongoose = require("mongoose");
const User = require("../model/userSchema");
const router = require("express").Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

require("dotenv").config()




router.post("/", async (req, res) => {
    const { userName, password } = req.body;

    const getUser = await User.findOne({userName: userName})
    console.log("user", getUser);

    if (getUser) {
      bcrypt.compare(password, getUser.password, (err, result) => {
        const token = jwt.sign({id: getUser._id, username: getUser.userName}, process.env.SECRET_KEY, {expiresIn: '10s'})
        console.log("token", token);
        result ? res.send(token) : res.sendStatus(404)
      })
    }
})

module.exports = router;