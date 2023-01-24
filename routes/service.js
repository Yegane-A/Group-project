const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('service', {title: 'service'});
});

module.exports = router;