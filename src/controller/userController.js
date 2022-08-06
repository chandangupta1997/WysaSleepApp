

const userModel = require('../Models/userModel')
const jwt=require('jsonwebtoken')

const nickName = async function(req,res){

    let data = req.query.nickName 
    console.log(data)


    let dbData ={
        nickName:req.query.nickName,
        questions:{
            struggleTime:null,
            bedTime:null,
            wakeUpTime:null,
            sleepHours:null

        }

    }

    let createdData = await  userModel.create(dbData)

    // we will sending the id in header token 
    console.log(createdData.id)

    let token = jwt.sign({userId:createdData.id} , "MyPrivateKey" , {expiresIn:"20d"})

    
    res.setHeader('authorization',token) // sending in header



    res.status(200).send({msg:"go ahead and answer next question",data:createdData})


}

const bedTime =async function(req,res){


    let bedTime  = req.query.bedTime
    console.log("line 63",bedTime)

    //accessing token from header 
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


    

    console.log(user.questions.bedTime )
    user.questions.bedTime = bedTime
    console.log(user.questions.bedTime )

    res.send(" move on to the next Questions ")

    
    

}

const wakeUpTime = async function(req,res){

}

const sleepHours = async function(req,res){

}


module.exports ={nickName,bedTime,wakeUpTime,sleepHours}
