import Day from "./day";
import './cal.css'
import { calenderRules } from "../months";
import {MdArrowRight ,MdArrowLeft} from 'react-icons/md'
import {useContext} from 'react'
import { AppContext } from "../../../App";
import { set_date } from "../../../actions";
import Sup from "./Sup";
const allMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const weekDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

const Calender=()=>{
   const {state,dispatch}= useContext(AppContext);
    const {currentDate}=state
    const date= new Date()
    const month=currentDate.getMonth()
    const year=currentDate.getFullYear()
    const weekDay= weekDays[currentDate.getDay()]

  const nextMonth=()=>{
       if(month===11){
           let newYear=year+1;
         dispatch({type:set_date,payload:new Date(newYear,0)})
        
       }
       else{
         dispatch({type:set_date,payload:new Date(year,month+1)})
           
       }
  }
  const prevMonth=()=>{ 
      if(month===0){
        const prevYear= year-1  
        dispatch({type:set_date,payload: new Date(prevYear,11)})

        
      }
      else{
          dispatch({type:set_date,payload:new Date(year,month-1)})
      }
  }
  
  const getDays=()=>{
      const arr=[]
      for( let x=1;x<=calenderRules(currentDate)[month];x++){
          arr.push(x)
        
      }
      return arr
  }
  const allDays= getDays()
    const isCurrentMonth= currentDate.getMonth()===date.getMonth()
    const isCurrentYear= currentDate.getFullYear()===date.getFullYear();
    const thisDate=  currentDate.getDate()
 
    return(
        <div className="cal-container" >
        <h1 className="date">{weekDay}:{thisDate}<Sup day={Number(thisDate)}/>-{allMonths[month]}-{year}</h1>
        <div className="sub-con">
{(!isCurrentMonth||!isCurrentYear)&&    <button className="btn left" onClick={prevMonth}>
<MdArrowLeft className="next-icon"/>
</button>
}
    
        <div className="days-container">

        {allDays.map(x=><Day key={x} num={x}/>)}
        </div>
        <button className="btn" onClick={nextMonth}>

        <MdArrowRight className="next-icon"/>
        </button>
        </div>
        </div>
    )
}
 export default Calender