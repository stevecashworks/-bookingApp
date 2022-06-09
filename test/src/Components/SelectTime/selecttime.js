import './selectime.css'
import { useContext } from "react";
import { set_book_end, set_book_start } from "../../actions";
import { AppContext } from "../../App";


const SelectTime = () => {
    const{dispatch,state}=useContext(AppContext)
    const {bookStart,bookEnd}=state
    const addTime=(time,type)=>{
        let [hh,mm]= time.split(':');
        
        if(type==='start'){
            console.log({hh,mm})
            dispatch({type:set_book_start,payload:{hh,mm}})
        }
        else{
            dispatch({type:set_book_end,payload:{hh,mm}})
        }
      }
      const calculate_time_difference=()=>{
        
          
          const diff=(new Date(0,0,0,bookEnd.hh,bookEnd.mm)-new Date(0,0,0,bookStart.hh,bookStart.mm))/60000;
 
 const hours= Math.floor(diff/60);
 const mins= diff%60;
 if(mins==0){
     return `${hours}hr(s)`
 }
 return `${hours}hr(s)-${mins}min(s)`
      }
      
           const duration=(bookStart&&bookEnd)?calculate_time_difference():""
           return (  
        <div className="select-time">
            <div >

            <p className="time-text">your session starts at:</p>
            <input type='time' onChange={(e)=>addTime(e.target.value,"start")} />
            </div>
           {(bookStart&&bookEnd)&&<h1 className='duration'> Duration:{duration}</h1>}
            <div >

<p className="time-text">your session ends at:</p>
<input type='time' onChange={(e)=>addTime(e.target.value,"end")} />
</div>
        </div>
    );
}
 
export default SelectTime;