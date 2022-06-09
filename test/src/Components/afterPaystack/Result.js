import { useContext } from 'react'
import { AppContext } from '../../App'
import './result.css'
const Result=()=>{
 const {state}= useContext(AppContext);
  const {result}=state
    return(
      <div className='res_con'>
          {result}
      </div>
  )
}
export default Result