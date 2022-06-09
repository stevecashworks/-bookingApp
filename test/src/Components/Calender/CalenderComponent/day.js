import './day.css'
import { AppContext } from '../../../App'
import { useContext } from 'react'
import { set_date } from '../../../actions'

const   Day= ({num})=>{
    const {state,dispatch}= useContext(AppContext)
     const {currentDate}= state;
     const year= currentDate.getFullYear();
     const month=  currentDate.getMonth();
     const isSelected= currentDate.getDate()===num
     

    return (
        <div  className="day" key={num} onClick={()=>{dispatch({type:set_date,payload:new Date(year,month,num)})}} style={{backgroundColor:isSelected?'blue':"lightgray"}}  >
            {num}
        </div>
    )
}
export default  Day