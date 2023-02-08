const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('special', { title: 'special' });
});

module.exports = router;