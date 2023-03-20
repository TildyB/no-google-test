const mongoose = require("mongoose");
const User = require("../model/userSchema");
const router = require("express").Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;


router.post("/", async (req, res) => {
    const { email, password, userName } = req.body;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            const newUser = new User({
                email,
                password: hash,
                userName,          
        });
            newUser.save();
    });

});
});

module.exports = router;
