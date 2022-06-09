import {useEffect,useContext} from 'react';
import './venues.css';
import {GiCheckMark} from 'react-icons/gi'
import { AppContext } from '../../App';
import { fetch_Data, select_venue } from '../../actions';
const Option=(props)=>{
    const value=useContext(AppContext);
    
    
    const isSelected=props.id===value.state.venue

    return (
       <div  className={'ven'}style={{backgroundImage:`url(${props.image})`}}onClick={()=>value.dispatch({type:select_venue,payload:props.id})}>
 {isSelected&&<GiCheckMark className='checked-icon'/>}
 <h1 className='ven-name'>{props.text}</h1>
       </div>
    )
}
const  Venues = () => {
    const value=useContext(AppContext);
     const {state,dispatch}= value
    useEffect(()=>{
        fetch('/api/v3/venues').then(res=>res.json()).then(data=>{dispatch({type:fetch_Data,payload:data})})
    },[dispatch])
 
 
    return (
        <div className="venue">
        
                
                {(state.fetched_Data.length!==0)&&state.fetched_Data.map(ven=><Option text={ven.name} id={ven._id} key={ven._id} image={ven.image}/>)}


        </div>
      );
}
 
export default Venues;