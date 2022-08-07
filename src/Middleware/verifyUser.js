const jwt = require('jsonwebtoken')

const userModel = require('../Models/userModel')


let verifyUser = async function(req,res,next){



    let token = req.headers["authorization"]

    const verifyUserFromToken = jwt.verify(token,"MyPrivateKey")
    console.log(verifyUserFromToken)
    if(!verifyUserFromToken){
        return res.send(" not authorized ")
    }


    // 
    let userId = verifyUserFromToken.userId

    let user = await userModel.findById(userId)
    if(!user){
        return res.send('user Not Found ')
    }

    req.userId = userId
    req.user  = user

   






    next()
}

module.exports = {verifyUser}