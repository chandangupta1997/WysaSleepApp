const express = require('express')
const userModel = require('../Models/userModel')
const userController = require('../controller/userController')
const middleware = require('../Middleware/verifyUser')
const route = express.Router()


route.get('/testMe', function(req,res){
    res.send("all  is well ")
})



route.post('/nickName',userController.nickName)
route.put('/struggleTime',middleware.verifyUser, userController.struggleTime)
route.put('/bedTime',middleware.verifyUser,userController.bedTime)
route.put('/wakeUptime',middleware.verifyUser,userController.wakeUpTime)
route.put('/sleepHours',middleware.verifyUser,userController.sleepHours)



module.exports =route