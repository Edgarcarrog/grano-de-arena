const passport = require('passport');
const User = require('../models/user');

// We create the local strategy
passport.use(User.createStrategy());

// We serialize and deserialize the User
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());