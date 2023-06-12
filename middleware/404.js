'use strict'

function error (req, res){
    console.log(req)
res.status(404).json({
code: 404,
message: 'Page not found!',
route: req.originalUrl 
})
}

module.exports = error

