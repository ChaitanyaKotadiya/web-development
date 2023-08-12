import React from 'react';
function Map1() {
    const arr = [1, 2, 3, 4, 5]
    return (
        <>
            <h1>Heare is the Example Of Mapping</h1>
        {arr.map((value)=>
            {
                if(value>3){
                    return <h1>
                        Array Elements Is == {value}
                    </h1>
                }
return <h2>Array Element= {value}</h2>
}}
        </>
    );
}
export default Map1;