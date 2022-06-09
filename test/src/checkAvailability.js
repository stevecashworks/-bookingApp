 export const getDetails=(dateString)=>{
   const date= new Date(dateString)
   return [date.getFullYear(),date.getMonth(),date.getDate()]
 }
 const checkAvailability=(existing, requested)=>{
  const {bookDate,bookType}=existing
  const {currentDate,booktype/*(this is for the requested booking)*/,bookStart,bookEnd}=requested 
  function checkSameDay(){
    const existingDate=  new Date(...getDetails(bookDate));
      const requestedDate=new Date(...getDetails(currentDate))
      
      //since objects as instances of class  are not deemed equal even if the have equal keys and value this is because they do not point to a value they poit to a position in memory: we convert yhe date to strings to enable comparison
       return !(String(existingDate)===String(requestedDate))
  }
  if(bookType==='full-day'){
     return checkSameDay()
   }
   else{
     if(booktype==='full-day'){  
      return checkSameDay()
     }
     else{
        const requestedBookStart=new Date(...getDetails(currentDate),bookStart.hh,bookStart.mm);
        const requestedBookEnd=new Date(...getDetails(currentDate),bookEnd.hh,bookEnd.mm);
     if(((requestedBookStart>existing.bookStart)||(String(requestedBookStart)===String(existing.bookStart)))&&((requestedBookEnd<existing.bookEnd)||(String(requestedBookEnd)===String(existing.bookEnd)))){
      // when the requested time is greater than or equal to the start of n existing booking, there's a clash
      return false

     }
     if((requestedBookStart<existing.bookStart)&&!(requestedBookEnd<existing.bookEnd)){
      // when the requested time starts before  an existing booking and fails to finish before the start of an existing booking  then theres a clash 
      return false
     }
      return true

     }
   }

 }
 export default checkAvailability