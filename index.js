var express = require ("express");

// Importing the express js module into our application

var app = express();
// we are initliazing the app using the express



app.get("/getUsers",(req,res)=>{
    res.send("Hello World");
});