const express = require('express')
const profilecon = require('../controller/profilecon')

const route = express.Router()

route.get('/authdata', profilecon.getProfileData)

module.exports = route