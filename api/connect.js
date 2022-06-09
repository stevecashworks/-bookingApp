/*
This module contains a function that  connects to the database 
it can be exported and  used   anywhere to connect to the mongoDb database 
 */ 
 const  mongoose= require('mongoose')
  const connectDb= async(Mongo_uri)=>{
     await  mongoose.connect(Mongo_uri)
     console.log("Connected")
      
 }
 module.exports= connectDb