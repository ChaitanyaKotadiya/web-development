import React from 'react';
function Filt1() {
    const arr1=[1,2,3,4,5,6,7,8,9,10]
    const newarr = arr.filter((num)=>
{
if(num===3){
return false;
}
else{
return true;
}})
var arr1 = arr.join(", "); //join each element of array by “,”
var arr2 = newarr.join(", "); //join each element of array by “,
return(
        <>
    <h1>Array elements before applying filter <span style={{color:"red"}}>
{arr1} </span> </h1>
<h1>Array elements after applying filter <span style={{color:"red"}}> {arr2}
</span> </h1>
        </>
    )
}
export default Filt1;