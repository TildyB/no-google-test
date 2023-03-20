const mongoose = require('mongoose');
const router = require('express').Router();
const Word = require('../model/wordSchema');
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, async(req, res) => {
    const getData = await Word.findOne(
        {
            content: 'Private',
        },
    )
    res.send(getData.content)
}   );

module.exports = router;