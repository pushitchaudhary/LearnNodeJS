const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send('this is home page');
})

app.get('/about',(req,res)=>{
    res.send('this is about page heelo');
})

app.listen(3000,()=>{
    console.log('node js has started at 3000')
})