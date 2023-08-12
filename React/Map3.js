import React from 'react';
import im1 from ""./random.jpg"
function Map3() {
    const images = [{
        id: 1,
        pic: im1,
        id: 2,
        pic: im1
    }]

    return (
        <div>
            {images.map((val) => {
                return <img src={val.pic} heigth="200px" width="200px" alt="logo" />
            })}
        </div>
    )
}
export default Map3