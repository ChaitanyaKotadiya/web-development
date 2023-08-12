import React, { useState } from "react";
function US5() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    function changeFirstname(event) {
        setFirstName(event.target.value);
    }
    function changeLastname(event) {
        setLastName(event.target.value);
    }
    return (
        <>
        <div>
            <div><input type=”text” name="firstName" value={firstName}
                onChange={changeFirstname} placeholder='First Name'/></div>
            <div><input type=”text” name="lastName" value={lastName}
                onChange={changeLastname} placeholder='Last Name'/></div>
            <h1>First Name: {firstName} Lastname: {lastName}</h1>
        </div >
        </>
    )
}
export default US5