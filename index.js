const express = require('express');
const app = express()
app.get('/',(req,res)=>{
    res.send("<h1 style='color:blue'>Print Wala</h1>")
})
app.listen(3000,()=>{console.log("server is listening on 3000");});