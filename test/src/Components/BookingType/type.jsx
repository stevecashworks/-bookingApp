import { useContext } from "react";
import { set_type } from "../../actions";
import { AppContext } from "../../App";
import './type.css'

const Type=()=>{
     const {dispatch}= useContext(AppContext)
    return(
        
         <div className="type-container">

         <div>
             <p>Please select booking type</p>
         </div>
            <label style={{float:"left"}}>Full-day:   <input type="radio" name="type" value="full-day"onChange={(e)=>{if(e.target.checked){dispatch({type:set_type,payload:e.target.value}) }}}  /> </label>
            <label style={{float:"right"}}>Time-slots:   <input type="radio" name="type" value="time-slots" onChange={(e)=>{if(e.target.checked){dispatch({type:set_type,payload:e.target.value}) }}} /> </label>
        
         </div>
    )
}
export default Type