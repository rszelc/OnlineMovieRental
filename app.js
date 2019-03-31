const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const session = require('express-session');
const passport = require('passport');
const validator = require('express-validator');
var expressHbs = require('express-handlebars');

const app = express();

mongoose.connect("mongodb://szmelu:"+process.env.MONGO_PW+"@ds239903.mlab.com:39903/mongobase", { useNewUrlParser: true });
require('./config/passport');

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    next();
});

app.use('/', routes);

module.exports = app;