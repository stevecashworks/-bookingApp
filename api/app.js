const express= require('express');
const cors = require('cors')
const connectDb=require("./connect");
const bookingRoute= require('./Routes/Venues/venueRoute');
const path= require("path");
const bodyParser= require('body-parser')
require("dotenv").config();
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}))
app.use('/api/v3/venues',bookingRoute);
app.use(express.static('./public'));
app.get('/',(req,res)=>{
  return res.sendFile(path.resolve(__dirname,"index.html"))
})
app.use(cors())
const PORT= process.env.port
 const start= async()=>{
     try {
        
        await connectDb(process.env.Mongo_uri)
        app.listen(PORT,()=>{console.log(`hello server is listening on port ${PORT}`);console.log(new Date())});

     } catch (error){
                console.log(error); 
     }
     
    }
    start()
