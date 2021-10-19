import React from "react";
import '../App.css'

function Card ( { image, color } ) {
    return (
        <div className="card">
            <img src={image} alt="" />
        </div>
    )
}

export default Card;