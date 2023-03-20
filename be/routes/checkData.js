const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../model/userSchema');

router.post('/email', async(req, res) => {
    const getData = await User.findOne(
        {
            email: req.body.email,
        },
    )

    res.send(getData)
}   );

router.post('/username', async(req, res) => {
    const getData = await User.findOne(
        {
            username: req.body.userName,
        },
    )

    res.send(getData)
}   );

module.exports = router;