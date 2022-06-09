import {add_Payment,fetch_Data,select_venue,set_Email, set_date,set_type,set_book_end,set_book_start, add_error, clear_errors, set_Price, set_Can_Pay, set_Results, set_Can_Book } from './actions'
import calculatePrice from './calculatePrice';
const reducer=(state, action)=>{
    const {type}= action
    switch(type){
      case add_Payment: return {...state, paidBookings:[...state.paidBookings,action.payload]};;
      case fetch_Data: return{...state,dataFetched:true,fetched_Data:action.payload};
     case select_venue:   return {...state,venue:action.payload,price:calculatePrice({...state,venue:action.payload})};
     case set_date: return{...state, currentDate:action.payload};
     case set_type:return{...state,type:action.payload,price:calculatePrice({...state,type:action.payload})};
     case set_book_start: return{...state,bookStart:action.payload,price:calculatePrice({...state,bookStart:action.payload})};
     case set_book_end: return{...state,bookEnd:action.payload, price:calculatePrice({...state,bookEnd:action.payload})};
     case add_error: return{...state, errors:[...state.errors,action.payload]} 
     case clear_errors:return{...state,errors:[]}
     case set_Email:return{...state,email:action.payload}
     case set_Price: return {...state,price:action.payload}
     case set_Can_Pay:return{...state,canPay:action.payload}
     case set_Results:return {...state,result:action.payload}
     case set_Can_Book:return{...state,canBook:action.payload}
    
    default:return state;
    }
    
    
  
    
    

    


}
export default reducer