const express = require("express");
require("./config/database")
const app = express()

app.listen(7777, ()=>{
    console.log("server is succesfully on given port");
})
