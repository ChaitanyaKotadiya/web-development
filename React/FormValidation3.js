// Create react app which contains form with following fields.
// • Email(Input type email)
// • Password(Input type password)
// • Confirm Password(Input type password)
// Add validation using regex to validate email id and password (Must contain at least
// 8 characters and must contain at least 1 uppercase, 1 lowercase and 1 digit).
// Also values of password and confirm password must be same.
// Display email in alert box. (Using useState Hook)

import React, { useState } from 'react'
const FormValidation3 = () => {
    const [formdata, setformdata] = useState({});
    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setformdata({ ...formdata, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const emailregex = /^([a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$)/;
        const passregex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (!emailregex.test(formdata.eid)) {
            alert("Please enter a valid Email ID");
        }
        else if (!passregex.test(formdata.pass)) {
            alert("Password must contain atleast 8 characters ( Atleast 1 digit, 1 lowercase & 1 uppercase alphabets)");
        }
        else if (formdata.pass !== formdata.cpass) {
            alert("password and confirm password must be same");
        }
        else {
            alert("Your form has been submitted.\nEmail: " + formdata.eid)
        }
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>Email Id:</label>
                <input type="email" name="eid" onChange={handlechange} /><br />
                <label>Password:</label>
                <input type="password" name="pass" onChange={handlechange} /><br />
                <label>Confirm Password:</label>
                <input type="password" name="cpass" onChange={handlechange} /><br />
                <button type="submit">Submit</button> <br />
            </form>
        </div>
    )
}
export default FormValidation3