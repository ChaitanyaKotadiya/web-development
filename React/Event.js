import React from "react";
function Event() {

    const mystyle = {
        color: "white",
        backgroundColor: "#000000",
        padding: "10px 20px",
        margin: "200px"
    };
        function handleClick() {
        alert('Welcome to LJU');
    }
    return (
        <>
    <button style = {mystyle} onClick={handleClick}>Clicked Me</button>
        </>
    )
}
export default Event