const express = require("express")
const PORT = process.env.SERVICE_PORT || 3000
const App = express()
const bodyParser = require("body-parser")
const userRouter = require("./routes/UserRoutes.js");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.use('/user',userRouter);

App.listen(PORT , ()=>{
    console.log(`App is running on PORT ${PORT}`)
})