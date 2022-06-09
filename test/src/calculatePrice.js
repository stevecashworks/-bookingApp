import { getDetails } from "./checkAvailability";
const getDateValue=(currentDate,slot)=>{
    return(new Date(...getDetails(currentDate),slot.hh,slot.mm))
}
const calculatePrice=(state)=>{
   const {type,venue,fetched_Data,currentDate,bookStart,bookEnd}=state
   const  thisVenue= fetched_Data.find(x=>x._id===venue)
   console.log('venue:',thisVenue)
   if(venue&&(fetched_Data.length!==0)) {
      
 const {price}= thisVenue

    if(type==='full-day'){
        return price.fullDay
    }
    else{
        if(bookStart&&bookEnd){
            const duration= getDateValue(currentDate,bookEnd)-getDateValue(currentDate,bookStart)
            const durationInMinutes =  duration/(1000*60)
            return price.timeSlots* Math.ceil(durationInMinutes/30)

        }
        return  null
    }
}
}
export default calculatePrice