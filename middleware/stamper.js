'use strict'

// function stamper (req, res, next){
//     req.stamper = new Date ()
//     // res.status(200).json({
//     // code: 200,
//     // time: req.stamper,
    
//     // }) 
//     next()
//     }

//   module.exports= stamper  


  // or i can exoprt it directly 
  module.exports = (req, res, next) => {
    req.stamper = new Date ()
    next()
    }