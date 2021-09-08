const express = require('express');

const router = express();

router.get('/bio', (req, res) => {
    res.send("Bio");
});

router.get('/contact', (req, res) => {
    res.send("Contact");
});

module.exports = router;