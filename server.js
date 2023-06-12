'use strict'

// require('dotenv').config();

// const PORT = process.env.PORT
const express = require ('express');
const app = express();
const cors = require ('cors')
app.use(cors())
const stamper = require('./middleware/stamper')
const pageNotFound = require('./middleware/404')
const serverError = require('./middleware/500')

app.get ('/', stamper,homeFun)
app.get ('/bad', badRequest)

app.use ('*' , pageNotFound)
app.use(serverError)

function homeFun (req, res){
res.status(200).json({
code: 200,
message: 'Welcome to the Home page',
time: req.stamper
})

}

function badRequest(req,res, next){
 req.body = {
    test: 'test'
 }  
next({message: 'test'})
}

function start(port) {
app.listen(port, () => console.log('running on port: ', port))
}

module.exports = {
    app,
    start
  }