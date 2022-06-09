import checkAvailability from "./checkAvailability"
const CheckBooking=async(venueId,payLoad)=>{
  try{
    if(venueId){
      const venue= await fetch(`/api/v3/venues/${venueId}`).then(res=>res.json()).then(data=>data)
     console.log(venue)
    const {currentDate,bookStart,bookEnd, bookType}=payLoad
   const {bookings}= venue
   bookings.forEach(x=>console.log("book_date",new Date(x.bookDate)))
   console.log("bookings",bookings)
   const canBook=()=>{
     if(bookings.length===0){return true}
     else if(bookings.every(x=>checkAvailability(x,{currentDate,bookStart,bookEnd,booktype:bookType}))){
       return true
     }
     return false
    }
   return canBook()
  }
  } catch(err){
    console.log(err)
  }   
 
  }
 export default CheckBooking 