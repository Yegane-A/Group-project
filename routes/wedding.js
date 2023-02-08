const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('wedding', { title: 'wedding' });
});

module.exports = router;