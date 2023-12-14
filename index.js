var express = require('express')
var mongoDAO = require('./mongoDAO')
var ejs = require('ejs')
var app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.redirect('/employees');
})

app.get('/employees', (req, res) => {
    mongoDAO.findAll()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
})

app.get('/addEmployee', (req, res) => {
    var details = {
        _id: '1',
        name: 'kev',
        salary: '1000',
        title: 'mr'
    }

    res.render('addEmployee')
    mongoDAO.addEmployee()
    .then(()=>{
        
    })
    .catch((err)=>{
        res.send(err)
    })
    
    
})

app.listen(3000, () => {
    console.log("Application Listening on port 3000")
})