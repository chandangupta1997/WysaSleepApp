



# approach 1

get all the data from req.body (from frontend) to mongoDb and then process that data 

route.post('/userDetails',-------


successfull response 

{
    "nickName": "Disco",
    "questions": {
        "struggleTime": "9 weeks",
        "bedTime": 2,
        "wakeUpTime": 19,
        "sleepHours": 5
    },
    "_id": "62ee143dfd5992043e61b25a",
    "__v": 0
}



# approach 2   (switch to step by step branch ) 

post-->put-->put -->put 

post data nickName 
then put all the question on null 

then update one by one by endPoints


route.post('/nickName,---)

router.put('/struggleTime',----)

router.put('bedTime',-----)

router.put('/sleepHours',--------)

they all are linked with the same uniqueID ("62ee03602acc2e9092a50245")
send again and again from diff endpoints Via Header token or simple body Token



2) verifying user is in middleWare section 



1)  {
    "nickName": "divine",
    "questions": {
        "struggleTime": null,
        "bedTime": null,
        "wakeUpTime": null,
        "sleepHours": null
    },
    "_id": "62ee7d3722bbeac27d8c30cf",
    "__v": 0
}


after 4 updates 

{
    "_id": "62ee86c2f0f8664bde3265b8",
    "nickName": "divine",
    "questions": {
        "struggleTime": "2 weeks",
        "bedTime": "10",
        "wakeUpTime": "6",
        "sleepHours": "6"
    },
    "__v": 0
}



** for simplicity vaidations is maintained in third branch (with Validations)
** apis are have space for integration for future modules.



Q .How will i delete data ?
i followed soft delete methods i.e every schema is have a key of isDeleted which has default boolean value false

when user wanna delete its account he/she just turn isDeletedkey to true . data wont be deleted but flagged and remain in database admin can change the status again
