// Dao stands for data access object
const MongoClient = require('mongodb').MongoClient
var coll

MongoClient.connect('mongodb://127.0.0.1:27017')
    .then((client) => {
        db = client.db('employeesDB')
        coll = db.collection('employees')
    })
    .catch((error) => {
        console.log(error.messge)
    })

var findAll = function () {
    return new Promise((resolve, reject) => {
        var cursor = coll.find()
        cursor.toArray()
            .then((documents) => {
                resolve(documents)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

var addEmployee = function () {
    console.log('going here')
    return new Promise((resolve, reject) => {
        var details = {
            _id: '1',
            name: 'kev',
            salary: '1000',
            title: 'mr'
        }
        var cursor = coll.insertOne(details)
        cursor.toArray()
            .then((documents) => {
                console.log('ok')
                resolve(documents)
            })
            .catch((error) => {
                console.log('error')
                reject(error)
                
            })
    })
}

module.exports = { findAll, addEmployee }