import React, { useState } from "react";
const US1 = () => {
    //useState to Change text
    const [name, setName] = useState("LJ University");
    //useState to Change Color
    const [textColor, setcolor] = useState("Red");
    //useState to Show Hide text
    const [hideText, setHide] = useState("React Js Hooks");
    const [buttontext, setButtontext] = useState("Hide")
    // Function to show and hide text and also button text
    function showhide() {
        if (buttontext === "Hide") {
            setButtontext("Show");
            setHide("")
        }
        else {
            setButtontext("Hide");
            setHide("React Js Hooks")
        }
    };
    // function to change text value
    const changeName = () => {
        let val = name;
        if (val === "LJ University") {
            setName("Welcome Students")
        } else {
            setName("LJ University")
        }
    }
    // Function to change color of the text
    const changeColor = () => {
        if (textColor === 'red') {
            setcolor("blue")
        } else {
            setcolor("red")
        }
    }
    return (
        <div>
            <button onClick={changeName}>Change Text</button>
            <button onDoubleClick={changeColor}>Change Color</button>
            <button onClick={showhide}> {buttontext}</button>
            <h1 style={{ color: textColor }}>{name}</h1>
            <h2>{hideText}</h2>
        </div>
    )
}
export default US1