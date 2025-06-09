const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    res.send("from the big big   server");
});
app.use("/hello",(req,res)=>{
    res.send("Hello theee   server");
});
app.use("/",(req,res)=>{
    res.send("Hello   the server");
})
app.listen(7777, ()=>{
    console.log("server is succesfully on given port");
});
