import './App.css'
import Venues from './Components/venues/Venues'
import React, { useReducer,useEffect} from 'react'
import reducer from './reducer';
import { submit } from './Submit';

import Calender from './Components/Calender/CalenderComponent/cal'
import initialState from './initialState'
import Reciept from './Components/reciept/reciept'
import Type from './Components/BookingType/type';
import SelectTime from './Components/SelectTime/selecttime'
import Price from './Components/Price/price';
import Email from './Components/Email/email';
import {PaystackButton} from 'react-paystack';
import { set_Can_Book, set_Can_Pay } from './actions';
import Result from './Components/afterPaystack/Result';
import { acceptBooking,rejectBooking } from './resolveBooking';
export const AppContext= React.createContext()
const App=()=>{
  
   const [state,dispatch]= useReducer(reducer,initialState);
    

  
  const  {errors,venue,canPay,public_key,email,price,result, bookStart,bookEnd,type,currentDate}= state;
  const bookData={bookStart,bookEnd,currentDate,type}
  
  
  useEffect(()=>{
    if(errors.length===0){
   dispatch({type:set_Can_Pay, payload:true})
    }
    else{
      dispatch({type:set_Can_Pay,payload:false})
    }
  },[errors,public_key])
  const sub=async()=>{
  
   const isVerified= await submit(state,dispatch)
   
     dispatch({type:set_Can_Book,payload:isVerified})
     
  
   


  }
   

   
   return (
   <AppContext.Provider value={{state,dispatch}}>
    <div className='appContainer'>
    {result &&<Result/>} 
   <div className="left">
   <Venues/> 
   <Calender/>
   <Type/>
  {(state.venue&&(state.fetched_Data.length!==0))&&<Price/>}
   {state.type==="time-slots"&&<SelectTime/>}
   <Email/>
   </div>
  <Reciept/>
    </div>
    {(!canPay)&& <button className='app-btn' onClick={sub}>Book Now</button>}
   {canPay&&<PaystackButton className='app-btn' text={'pay now'} amount={price*100}email={email} metadata={{name:'steve',phone:+2349034633047}}onSuccess={()=>acceptBooking(venue,bookData,dispatch)} onClose={()=>rejectBooking(dispatch)} publicKey={public_key} />}
   </AppContext.Provider>
   )

 }
 export default App