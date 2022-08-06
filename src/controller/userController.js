

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

    let token = jwt.sign({userId:createdData.id})



    res.send(createdData)


}

const bedTime =async function(req,res){

}

const wakeUpTime = async function(req,res){

}

const sleepHours = async function(req,res){

}


module.exports ={nickName,bedTime,wakeUpTime,sleepHours}
