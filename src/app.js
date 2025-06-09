const express = require("express");
const app = express();
app.use("/test",(req,res)=>{
    res.send("from the big   server");
});
app.use("/hello",(req,res)=>{
    res.send("Hello   server");
})
app.listen(7777, ()=>{
    console.log("server is succesfully on given port");
});