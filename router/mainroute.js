const express = require('express')
const route = express.Router();
const authroute = require('./authRoute')
const profileroute = require('./profileroute')



route.use('/auth', authroute)
route.use('/profile', profileroute)


module.exports = route