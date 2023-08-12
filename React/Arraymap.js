import React from 'react';
function Arraymap(){
    const arr=["A", "B", "C", "D", "E", "F"]
    return(
        <>
        {
            arr.map(value)=>{
                return(
                <h2>
                    Array Off Elements Is = {value.toUpperCase()}
                </h2>
                )
            }
        }
        </>
    )
}
export default Arraymap;