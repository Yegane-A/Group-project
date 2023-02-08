const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('funeral', { title: 'funeral' });
});

module.exports = router;