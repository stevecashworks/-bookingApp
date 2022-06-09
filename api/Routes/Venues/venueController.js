const asyncWrapper = require("../../async");
const venueSchema= require('../../Schema/Schema');
 const getAllVenues=asyncWrapper(async(req,res)=>{
  const data=  await venueSchema.find()
return res.status(300).json(data)
})
const addVenue= asyncWrapper(async(req,res)=>{
  try {
    console.log(req.body)
    const  data= await venueSchema.create(req.body);
    console.log(data)
      return res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
    return res.status(200).json(error.message)
  }
    
})
const addBooking=asyncWrapper(async(req,res)=>{
   const {id}= req.params;
   const {bookType,bookDate,bookStart,bookEnd}=req.body
   const data=  await venueSchema.findById(id)
   let new_Data
  try{
    if(bookType==='full-day') {
    new_Data= await venueSchema.findByIdAndUpdate(id,{$set:{bookings:[...data.bookings,{bookType,bookDate}]}},{new:true});
  }else{
    new_Data= await venueSchema.findByIdAndUpdate(id,{$set:{bookings:[...data.bookings,{bookType,bookDate,bookStart,bookEnd}]}},{new:true});
  }
  res.status(200).json({message:"success"})
}catch(error){
  console.log(error)
  res.status(200).json({message:"failed"})

}

})
const getVenue=asyncWrapper(async(req,res)=>{
   const id= req.params.id;
    const venue=  await venueSchema.findById(id)
    res.status(200).json(venue)
})
module.exports={getAllVenues,getVenue,addVenue,addBooking}