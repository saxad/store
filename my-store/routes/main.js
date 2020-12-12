const express = require('express');
const { get } = require('express/lib/response');
const router = express.Router();



router.get('/', (req, res, next) => {
    res.render('home',{text : "hello from mustache"})
})

module.exports = router;

