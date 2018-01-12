import React from "react";
import "./images.css";



const Images = props => (
<div>

<div className="container">
    <div className="card">
        <div className="img-container">
            <div onClick={() => props.shuffleImages(props.id)}>
            <span onClick={() => props.counter(props.id)}>
            <img src={props.image} onClick={() => props.arrayPush(props.id)} />
            </span>
            </div>

        </div>
    </div>
</div>
</div>
    );
    
export default Images;