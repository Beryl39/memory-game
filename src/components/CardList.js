import React, {useState, useContext} from "react";
import Card from "./Card";
import '../App.css'
import { CardContext } from "./CardContext";

const CardList = () => {

    //use Context to retrieve card data externally
    const [cards, setCards] = useContext(CardContext);

    return (
        <div className="cards-container">
            {cards.map(card => (
                <Card 
                    key={card.id} 
                    color={card.color}
                    number={card.number}
                    image={card.imgBack}
                    flipped={card.imgFront}
                />
            ))}
        </div>
    )

}


export default CardList;