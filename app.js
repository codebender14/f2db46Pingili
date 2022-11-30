var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }
 ));

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pizzaRouter = require('./routes/pizza');
var buildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var pizza = require("./models/pizza");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pizza', pizzaRouter);
app.use('/gridbuild', buildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


async function recreateDB() {
  // Delete everything
  await pizza.deleteMany();
  let instance1 = new
    pizza({
      "Pizza_Name": "Pepproni",
      "Pizza_Type": "Non-Vegetarian", "Pizza_Cost": 3.78,
      "Pizza_Toppings": "Cheese"
    });
  let instance2 = new
    pizza({
      "Pizza_Name": "Chicken",
      "Pizza_Type": "Non-Vegetarian", "Pizza_Cost": 8.30,
      "Pizza_Toppings": "Onion"
    });
  let instance3 = new
    pizza({
      "Pizza_Name": "Capsicum",
      "Pizza_Type": "Vegetarian", "Pizza_Cost": 3.25,
      "Pizza_Toppings": "Potato"
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First Application saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second Application saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third Application saved")
  });
}
let reseed = true;
if (reseed) { recreateDB();}

module.exports = app;
