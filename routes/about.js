const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.isLoggedIn) {
        res.render('about', {title: 'about'});
    } else {
        res.redirect('/');
    }

});

module.exports = router;