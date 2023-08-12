import React from 'react';
function Map2() {
    let arr = [2, 4, 6, 3, 10, 12]
    return (
        <>
            {
                arr.map((value) => {
                    return <h2>{value} * 5 = {value * 5}</h2>
                })
            }
        </>
    )
}
export default Map2;