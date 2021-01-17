const Router = require("express").Routes()

Router.get("/" ,(req,res,next)=>{
    return res.json({
        status:true,
        message:"Passed"
    })
})


module.exports = Router;