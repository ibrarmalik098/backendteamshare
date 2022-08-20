const express = require('express')
const mainroute = require('./router/mainroute')
const app = express();
const connectDB = require('./config/db')
require("dotenv").config();

app.use(express.json())


app.use(mainroute);
connectDB();

// console.log(process.env)

app.listen( process.env.PORT, () => {
    console.log("server Start");
})