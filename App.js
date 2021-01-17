const express = require("express")
const PORT = process.env.SERVICE_PORT || 3000
const App = express()
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


App.listen(PORT , ()=>{
    console.log(`App is running on PORT ${PORT}`)
})