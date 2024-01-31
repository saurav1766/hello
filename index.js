const express = require('express');
const app = express();
app.get('/hello/n',(req,res)=>{
    res.send("hello ");
})
app.listen(4000,()=>{console.log("start")});