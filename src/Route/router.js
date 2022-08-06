const express = require('express')
const userModel = require('../Models/userModel')

const route = express.Router()


route.get('/testMe', function(req,res){
    res.send("all  is well ")
})



route.post('/userDetails',async function(req,res){


    let data = req.body 

    let {nickName,questions} = data
    // for validation and all 
   

    //questions =JSON.parse(questions)

    let DataForDb ={
        nickName:nickName,
        questions:{
            struggleTime:questions.struggleTime,
            bedTime:questions.bedTime,
            wakeUpTime:questions.wakeUpTime,
            sleepHours:questions.sleepHours
        }

    }

    let createdData = await userModel.create(DataForDb)

    res.send(createdData)



})





















module.exports =route