 const mongoose= require("mongoose")
 const venueSchema=  mongoose.Schema({
     name:{
         type:String,
         required:true,
         unique:true
             },
             bookings:[
                 {
                     bookType:{
                         type:String,
                         enum:['full-day',"time-slots"],
                         required:true
                        },
                        bookDate:{
                            type:Date,
                            required:true
                        },
                        bookStart:Date,
                        bookEnd:Date
            }],
             image:String,
             closeBy:{hh:{type:Number,default:21},mm:{type:Number,default:30}},
             OpenBy:{hh:{type:Number,default:7},mm:{type:Number,default:0  }},
             price:{
                 fullDay:Number,
                 timeSlots:Number,

             }
             
    
 })
 module.exports= mongoose.model("Venues", venueSchema)