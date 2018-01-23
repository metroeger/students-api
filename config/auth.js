// config/auth.js
const passport = require('passport')
const mongoose = require('mongoose')
const { User } = require('../models')
const jwtOptions = require('./jwt')
const passportJWT = require('passport-jwt')

const JwtStrategy = passportJWT.Strategy

const tokenStrategy = new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  const user = User.findById(jwtPayload.id) //  const user = User.findById(jwtPayload.fruitCake) 
    .then((user) => {
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
    .catch((err) => done(err, false))
})

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser()) // User. -> comes from mongose model
passport.deserializeUser(User.deserializeUser())
passport.use(tokenStrategy)

module.exports = passport
