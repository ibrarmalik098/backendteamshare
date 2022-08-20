const authModel = require('../model/authModel')

const users = [
    {
        id: 1,
        userName: 'ibrar',
        email: 'ibrar@gmail.com',
        password: 12345
    },
    {
        id: 2,
        userName: 'bilal',
        email: 'bilal@gmail.com',
        password: "bilal786"
    },
    {
        id: 3,
        userName: 'sameer',
        email: 'sameer@gmail.com',
        password: "sameer@786"
    },
    {
        id: 4,
        userName: 'jawad',
        email: 'jawad@gmail.com',
        password: "jawad@786"
    },
]

const getAuthData = (req, res) => {
    res.send({ success: true, message: "success", data: users })
}

/////false , 09 , undefined , null , NaN , empty 
const signUp = async(req, res) => {

    const { email, password, userName } = req.body;
    // const findEmail = users.find((val, ind) => {
    //     return email == val.email
    // })

    const checkUser = await authModel.findOne({"email":email})

    if (!checkUser) {
        const result = new authModel({email,password,userName});
result.save()
    .then((data)=>{
res.send({success:true,data})
    })
    .catch((err)=>{
        res.send({success:false,message:err.message})
    })
        res.status(402).send({ success: false, message: "Duplicate Email, Try Another one" })
    }
    else {

        // users.push({ id: users.length + 1, email, password, userName });
        res.status(200).send({ success: false, message: "Duplicate Email, Try Another one" });
    }
}



const login = (req, res) => {
    const { email, password } = req.body

    const findEmailPass = users.find((val, ind) => {
        return email == val.email && password == val.password
    })
    if (!findEmailPass) {
        res.status(402).send({ success: false, message: "Email Not Found" })
    } else {
        // users.push({email, password})
        res.status(200).send({ success: true, message: 'login Successfully' })
    }
}

module.exports = { getAuthData, signUp, login }