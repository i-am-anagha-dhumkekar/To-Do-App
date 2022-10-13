const express=require('express');
const app=express();
const userRoutes = require('./api/route/user');
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydata",{useNewUrlParser:true,useUnifiedTopology:true});


app.use("/user", userRoutes);
app.use((req,res,next)=>{
    res.status(200).json({
        message:"It works"
    });
});
module.exports=app;