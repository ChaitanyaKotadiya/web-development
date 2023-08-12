// Create react app which contains form with following fields.
// • First Name(Input type text)
// • Lastname(Input type text)
// • Email(Input type email)
// • Password(Input type password)
// • Confirm Password(Input type password)
// • Message (Textarea)
// • Gender(Radio Button)
// • City (Dropdown)
// Display submitted values in alert box. (Using useState Hook)

import React, { useState } from 'react'
const FormValidation2 = () => {
    const [formdata, setformdata] = useState({});
    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setformdata({ ...formdata, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        alert("Your form has been submitted.\nName: " + formdata.fname +
            "\nEmail: " + formdata.eid + "\nCity: " + formdata.city + "\nGender:
"+formdata.gender)
}
    return (
        <div>
            <form className="form-data" onSubmit={handlesubmit}>
                <label>First Name:</label>
                <input type="text" name="fname" onChange={handlechange} /><br />
                <label>Email Id:</label>
                <input type="email" name="eid" onChange={handlechange} /><br />
                <label>Password:</label>
                <input type="password" name="pass" onChange={handlechange}
                    required /><br />
                <label>Confirm Password:</label>
                <input type="password" name="cpass" onChange={handlechange} /><br />
                <label>Message : </label>
                <textarea name="msg" onChange={handlechange} /><br />
                <select onChange={handlechange} name='city'>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Rajkot">Rajkot</option>
                </select>
                <input type="radio" name="gender" value="Male"
                    onChange={handlechange} />Male
                <input type="radio" name="gender" value="Female"
                    onChange={handlechange} />Female
                <button type="submit">Submit</button> <br />
            </form>
        </div>
    );
}
export default FormValidation2