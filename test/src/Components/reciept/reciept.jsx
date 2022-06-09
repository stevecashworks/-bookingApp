import { useContext } from 'react';
import { AppContext } from '../../App';
 import {FaHandPointRight} from 'react-icons/fa'
import './reciept.css';
const Reciept = () => {
    const {state}= useContext(AppContext)
    return ( <div className="reciept-container">
<h1>
Summary
</h1>
{state.errors.map(x=>x?<div className="error">
    
    <FaHandPointRight className='right-pointer'/>
    <h4 className='error-message'>{x}</h4>
    </div>:null)}

    </div>);
}
 
export default Reciept;