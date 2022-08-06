const express = require('express')
const userModel = require('../Models/userModel')
const userController = require('../controller/userController')

const route = express.Router()


route.get('/testMe', function(req,res){
    res.send("all  is well ")
})



route.post('/nickName',userController.nickName)
route.put('/bedTime',userController.bedTime)
route.put('/wakeUptime',userController.wakeUpTime)
route.put('/sleepHours',userController.sleepHours)



module.exports =route