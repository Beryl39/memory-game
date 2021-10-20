import React, {useState} from "react";
import '../App.css'

function Card ( { image, flipped, color } ) {

    //flip card when clicking on it
    const [flippedCard, setFlippedCard] = useState(true);

    //function to toggle card flip
    const flipCard = () => setFlippedCard(!flippedCard)

    return (
        <div className="card">
            <img 
                onClick={() => setFlippedCard(prev => !prev)}
                src={flippedCard ? image : flipped}
                alt="" />
        </div>
    )
}

export default Card;