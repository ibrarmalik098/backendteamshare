const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    userName:{
        type:String
    },
})

const authModel = mongoose.model("authdata",authSchema);

module.exports = authModel