const express = require('express');
const router = express.Router();
const User = require('../models/User');

const passport = require('passport');

let isAuthenticated = () => {
  if(req.isAuthenticated()){
    console.log(req.user)
    return next()
  } else {
    res.json({message: 'Its forbitten'})
  }
}

// User Loggin

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  return res.status(200).json(req.user);
})

// Create User

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
  .then((user) => {
    return res.status(202).json(user)
  }).catch((err) => {
    next(err)
  });
})

// Mantain User Session

router.get('/loggeduser', isAuthenticated, (req, res, next) => {
  User.findById(req.user._id)
  .then(user => {
    return res.json(user)
  }).catch(e => next(e))
})


module.exports = router;