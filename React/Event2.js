import React from 'react';
function Event2() {
    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
        <>
        <input type="text” name="firstName" onChange={handleChange}/>
        </>
        
    );
}
export default Event2;