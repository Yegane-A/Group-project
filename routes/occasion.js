const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('occasion', { title: 'occasion' });
});

module.exports = router;