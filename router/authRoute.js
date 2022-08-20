const express = require('express')
const authCon = require('../controller/authcon')

const route = express.Router()

route.get('/authdata', authCon.getAuthData);
route.post('/signup', authCon.signUp)
route.post('/login', authCon.login)

module.exports = route