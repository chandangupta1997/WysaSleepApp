

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


const struggleTime = async function (req,res){

    
    let struggleTime = {
        "questions.struggleTime":req.query.struggleTime

    }
   let struggleTimeUpdate = await userModel.findOneAndUpdate({_id:req.userId},struggleTime,{new:true})

   res.send(struggleTimeUpdate)


}

const bedTime =async function(req,res){


    

    let bedTime = {
        "questions.bedTime":req.query.bedTime

    }
   let bedTimeUpdate = await userModel.findOneAndUpdate({_id:req.userId},bedTime,{new:true})

   res.send(bedTimeUpdate)




    
    
    

}

const wakeUpTime = async function(req,res){
    let wakeUpTime = {
        "questions.wakeUpTime":req.query.wakeUpTime

    }
   let wakeUpTimeUpdate = await userModel.findOneAndUpdate({_id:req.userId},wakeUpTime,{new:true})

   res.send(wakeUpTimeUpdate)

}

const sleepHours = async function(req,res){

    let sleepHours = {
        "questions.sleepHours":req.query.sleepHours

    }
   let sleepHoursUpdate = await userModel.findOneAndUpdate({_id:req.userId},sleepHours,{new:true})

   res.send(sleepHoursUpdate)

}


module.exports ={nickName,struggleTime,bedTime,wakeUpTime,sleepHours}
