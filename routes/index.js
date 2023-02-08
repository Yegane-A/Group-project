const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    req.session.isLoggedIn = true;

    res.render('index', { title: 'Home' });
});

module.exports = router;