// this  file is our "controller file" and is responsible for 
// handling all of our routes
// and rendering our viwes.

// test about what lines 6-8 are doing. Getting code libraries to use in this file 
const express = require('express');
const path = require('path');
const session = require('express-session');
require('colors');

const frontPage = require('./routes/index');
const about = require('./routes/about');
const service = require('./routes/service');
const occasion = require('./routes/occasion');
const birthday = require('./routes/birthday');
const funeral = require('./routes/funeral');
const special = require('./routes/special');
const wedding = require('./routes/wedding');
const Login = require('./routes/loggin');



const app = express();



// for body parser, leyfir req.body
app.use(express.urlencoded({ extended: false}));

// test about what line 18 doing. setting up a static file server
// serve static files 
app.use(express.static(path.join(__dirname, 'public')));

// template engine 
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');  // set up ejs for templating => test

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

    

// test about what line 26 is doing. setting up a route
// routers
app.use('/', frontPage);
app.use('/about', about);
app.use('/service', service);
app.use('/occasion', occasion);
app.use('/birthday', birthday);
app.use('/funeral', funeral);
app.use('/special', special);
app.use('/wedding', wedding);
app.use('/loggin', Login);





// errors : page not found
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

// handing errors
app.use((err, req, res) => {
    res.status(err.message || 500);
    res.send(err.message);
});

// setting up the server 
app.listen(3000, () => {
    console.log('server is running on port 3000.....'.green);
     });