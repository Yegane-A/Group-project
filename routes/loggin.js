const { Router } = require('express');
const express = require('express');

const routes = express.Router();

// get loggin page
router.get('/', (req, res) => {

}); 

// post loggin page
router.post('/', (req, res) => {
    if (req.body.username === 'Jerry' && req.body.password ==='123') 
       { req.session.username = req.body.username;
        req.session.isLoggin = true;
        res.redirect('/');
        } else {
            res.redirect('/login');
        }
         });

         module.exports = router;