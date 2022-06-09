import { useContext } from "react"
import { AppContext } from "../../App"
import  {set_Email} from '../../actions'

const Email=()=>{
    const style={
        letterSpacing:'1px',
        height:"50px",
        display:'block',
        width:'400px',
        margin:' 10px auto',
        fontSize:'1.2rem',
    }
const {dispatch}= useContext(AppContext)
    return(
        <input type='email' style={style} placeholder="Please input your email" onChange={(e)=>dispatch({type:set_Email,payload:e.target.value})}/>
    )
}
export default Email