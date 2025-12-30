const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send("Welcome to my Backend Server..");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port : ${process.env.PORT}`);
    
})

