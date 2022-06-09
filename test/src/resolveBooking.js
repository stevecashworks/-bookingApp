import { set_Results } from "./actions";
import Book from "./addSession";
export const  acceptBooking= async(venue,otherInfo,dispatch)=>{
 
  await Book(venue,otherInfo);
 dispatch({type:set_Results,payload:"your booking was successful"})
 setTimeout(()=>{
    dispatch({type:set_Results,payload:null})
   //  window.location.reload()

 },2000) 

}
export const rejectBooking=(dispatch)=>{
   dispatch({type:set_Results,payload:"Oops something went wrong, please try again!"})
 setTimeout(()=>{
    dispatch({type:set_Results,payload:null})

 },2000) 
}
