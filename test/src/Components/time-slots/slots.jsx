import './slots.css';
import data from './data';
import { AppContext } from '../../App';
import { useContext } from 'react';
import { select_slot } from '../../actions';
import { GiCheckMark } from 'react-icons/gi';

const Slots=(props)=>{
    const  {state,dispatch}= useContext(AppContext);
   const isChosen=props.sn===state.slot

    return(
        <div className='time-slots' onClick={()=>{dispatch({type:select_slot,payload:props.sn})}}>
         {isChosen&&<GiCheckMark className='checked-button'/>}
         <p className="details">Slot {props.sn}: {props.data.start } - {props.data.end}</p>
        </div>
    )
}
const TimeSlots = () => {
    
    return (
        <div className="container">
         {Object.keys(data).map(item=><Slots sn={item} data={data[item]}/>)}
      
        </div>
      );
}
 
export default TimeSlots;