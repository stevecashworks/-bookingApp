import { getDetails } from "./checkAvailability";

const Book= async(venue_Id,Data)=>{
    const{bookStart,bookEnd,type,currentDate}=Data
    let data;
    console.log(bookStart)
    
    if(type==="full-day"){
    
        data={
            bookType:type,
            bookDate:new Date(...getDetails(currentDate))

        }
    }
    else{
        data={
            bookType:type,
            bookDate:new Date(...getDetails(currentDate)),

            bookStart:new Date(...getDetails(currentDate),bookStart.hh,bookStart.mm),
            bookEnd:new Date(...getDetails(currentDate),bookEnd.hh,bookEnd.mm)
        }
    }
    await fetch(`/api/v3/venues/addbooking/${venue_Id}`,{
 method:"POST",
 headers:{
     "Content-Type":"application/json"
 },
 body:JSON.stringify(data) 
 
    }).then(res=>res.json()).then(dat=>alert(dat.message)).catch(err=>console.log(err))
}
export default Book  