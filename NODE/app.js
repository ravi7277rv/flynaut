//setting up express
const express=require('express');
const app=express(express);
app.set('view engine','ejs');

// importing configuration
const config = require('./config/config')

// importing packages
const mongoose = require('mongoose');
var passport=require('passport');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var csrf=require('csurf');
const flash=require('connect-flash');

// connecting to mongodb database
mongoose.connect(`${config.mongo.string}`)
.catch(err=>{
    console.log(err)
})
mongoose.connection.on('error', err => {
    console.log(err);
  });


  /****************************8SETTING MIDDLEWARES ************************************/

app.use(express.static(`./public`)); // for redirect all static files request to 'public' directory
app.use(express.urlencoded({limit:'50mb',extended:true})); // to extract data from http urlencoded request
app.use(express.json({limit:'50mb',extended:true})); // to extract data passed as json from ajax request

app.use(cookieParser()); // for handling cookie

app.use(session({
    secret:'dsf5ds5f5dsfd',  // for handling session
    resave:true,
    saveUninitialized:true
}));

app.use(csrf({cookie:true}))  // for handling token

//custom csrf message
app.use(function (err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err)
 
  res.status(403).send('unauthorised access');
});

app.use(flash()); // for passing messages to views

// Passport startegy
require('./config/passport')();

app.use(passport.initialize());
app.use(passport.session());

 //global variables for views
 app.use((req,res,next)=>{
    res.locals.success_msg= req.flash('success_msg');
    res.locals.error= req.flash('error');
    res.locals.message= req.flash('message');
    res.locals.user = req.user
    res.locals.redirect = req.query.redirect
    next();
});


// initializing routes
const userRoutes = require('./routes/user');
app.use(userRoutes);


const server = app.listen(config.server.port,()=>{
  console.log(`server is running at port : ${config.server.port}`);
});


//initiating socket connection
const socket = require("./services/socket");
socket(server);