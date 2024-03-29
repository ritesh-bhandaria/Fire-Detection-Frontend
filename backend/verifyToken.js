const jwt = require('jsonwebtoken')
const axios = require('axios')

const getFireResult = async({top_long, top_lat, bot_long, bot_lat, date})=>{
    try{

        const result = await axios.post('http://192.168.107.65:6000/predict', {top_long, top_lat, bot_long, bot_lat, date})
        return result.data
    }catch(err)
    {
        console.log(err);
    }
    return []
}

const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    console.log(token)
    if(!token){
        return res.status(403).send({
            status:false,
            message:"Unauthorised User"
        })
    }

    try {
        jwt.verify(token,process.env.Secret_key,(err,user)=>{
            if(err){
                return res.status(403).json({
                    status:0,
                    message:"Token is not valid"
                })
            }
            req.user = user
            next();
        })
    } catch (error) {
        return res.status(401).json({
            status:false,
            message:
            "U are not authenticated"
        })
    }

}

module.exports = {verifyToken,getFireResult}