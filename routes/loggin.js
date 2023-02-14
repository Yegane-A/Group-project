const { Router } = require('express');
const express = require('express');

const routes = express.Router();

// get loggin page
routes.get('/', (req, res) => {
    res.render('loggin', {title: 'Login'});

}); 

// post loggin page
routes.post('/', (req, res) => {
    if (req.body.username === 'Jerry' && req.body.password ==='123') 
       { req.session.username = req.body.username;
        req.session.isLoggin = true;
        res.redirect('/');
    } else {
        res.redirect('/loggin');
    }
    });

module.exports = routes;