import { useContext } from "react";
import { AppContext } from "../../App";

const Price = () => {
    const {state}= useContext(AppContext) 

    return ( <h2>
        Price:{state.price}
    </h2>); 
}
 
export default Price;