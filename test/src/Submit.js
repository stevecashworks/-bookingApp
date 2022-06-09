import { add_error, clear_errors, set_Can_Pay } from "./actions";
import { no_venue,no_type,invalid_date, pick_slots, invalid_end_date, no_Email, invalid_email} from "./errors";
import CheckBooking from "./checkBooking";
// import Book from "./addSession";




  export const submit=async(state,dispatch)=>{
   
    
    dispatch({type:clear_errors})
    const {venue,fetched_Data,type,currentDate,bookStart,bookEnd,errors,email}=state
    if(!email){
 dispatch({type:add_error,payload:no_Email})
    }
    else{
      const emailRegex= /^[a-z]+[a-z0-9$_]+@[a-z]+\.[a-z]+/i
      const correct=emailRegex.test(email)
      
      if(!correct){
        dispatch({type:add_error,payload:invalid_email})
      }
    }
    
    
  if(!venue){
    
     dispatch({type:add_error,payload:no_venue})
    }
    else{
     
    }
    if(!type){
      dispatch({type:add_error,payload:no_type})
    }
    else{
      const current= new Date();
      if(type==="full-day"){
        current.setHours(0); 
        current.setMinutes(0); 
      if(currentDate<current){
        dispatch({type:add_error,payload:invalid_date})
      }
      }
      else{
        if(!bookStart||!bookEnd){
          dispatch({type:add_error,payload:pick_slots})
        }
        else{
          const bookStartDate= new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate(),bookStart.hh,bookStart.mm);
          const bookEndDate= new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate(),bookEnd.hh,bookEnd.mm);

         if(bookStartDate<current ){
        dispatch({type:add_error,payload:invalid_date})

         }  
         else{
           if(bookStartDate>=bookEndDate){
             dispatch({type:add_error,payload:invalid_end_date})
           }
         }
        }
      
      }
    
    }
    
    let canBook

    if(venue&&type) {

      canBook=await  CheckBooking(venue,{bookStart,bookEnd,currentDate,bookType:type},fetched_Data)
      if(!canBook){
        dispatch({type:add_error, payload:"This time-slot is taken"})
      }
      
      console.log(canBook)
      return  canBook
    }else{
      return false;
    }
    
     
      




 
 }
 
