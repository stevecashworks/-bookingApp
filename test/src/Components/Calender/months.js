
export const calenderRules=(year)=>{
if(!year){
    year=new Date().getFullYear()
}else{
    year= year.getFullYear()
}
const months={}
   const isLeap= (year%4===0)
    for (let x of [0,2,4,6,7,9,11]){
        months[x]=31
    }
    months[1]= isLeap?29:28;
 for(let x of [8 ,3,5,10]){
     months[x]=30
 }
 return months
}

