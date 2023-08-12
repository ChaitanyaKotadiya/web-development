import React,{useState} from 'react';
import img1 from "./random.png"
import img2 from "./random.png"

function US4(){
    const US2 = () => {
        const [myImage,setImage]=useState(img1);
        const changeImage = () => {
        if(myImage === img1){
        setImage(img2)
        }else{
        setImage(img1)
        }
        }
    return(
        <>
        <img src={myImage} heigth="200px" width="200px" alt="logo" />
<button onClick={changeImage}>Change Image</button>
        </>
    )
}