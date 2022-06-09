const Sup  = (props) => {
 let sup
 const day= Number(props.day)
 if(day===1||(day%10===1&&day!=11)){
 sup="st"
 }
else if(day===2|(day%10===2&&day!==12)){
    sup="nd"
    }
    else if(day===3||(day%10===3&&day!=13)){
        sup="rd"
        }
        else{
            sup="th"
        }
    
return ( <sup>
     {sup}
    </sup> );
}
 
export default Sup ;