const router = require("express").Router();
const User = require("../Model/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const verifyToken = require("../verifyToken");
require('dotenv').config()

router.get('/test',verifyToken,(req,res)=>{
    res.status(200).send(req.user)
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(401).send({
                status:false,
                message:"Wrong password or Username"
            })
        }

        const accessToken = jwt.sign({
            id: user._id,
            email: user.email,
            username:user.username
        },
            process.env.Secret_key,
            { expiresIn: "5d" }
        )
        const { password, ...info } = user
        bcrypt.compare(req.body.password, user.password).then((result)=>{
            result ? 
            res
            .cookie('access_token',accessToken,{'maxAge':24*60*60*1000,httpOnly:true})
            .status(200).json({ ...info,status:true,accessToken }) 
            :
            res.status(401).json({status:false,message:"Wrong password or Username"})
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }

})

router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);

    const newUser = new User({
        username: req.body.username,
        email:req.body.email,
        password:await bcrypt.hash(req.body.password,salt)
    })

    try {
        const user = await newUser.save()
        const {password,...args} = user._doc;
        res.status(201).json({ ...args })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/logout',(req,res)=>{
    res.clearCookie('access_token')
    res.status(200).send('abc');
})

module.exports = router