import React, {useState, createContext} from "react";

export const CardContext = createContext();

export const CardProvider = (props) => {

    const [cards, setCards] = useState([
        {
            id: 1,
            color: 'black',
            number: 'two',
            imgFront: 'images/2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 2,
            color: 'red',
            number: 'two',
            imgFront: 'images/2-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 3,
            color: 'red',
            number: 'two',
            imgFront: 'images/2-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 4,
            color: 'black',
            number: 'two',
            imgFront: 'images/2-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 5,
            color: 'black',
            number: 'three',
            imgFront: 'images/3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 6,
            color: 'red',
            number: 'three',
            imgFront: 'images/3-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 7,
            color: 'red',
            number: 'three',
            imgFront: 'images/3-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 8,
            color: 'black',
            number: 'three',
            imgFront: 'images/3-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 9,
            color: 'black',
            number: 'four',
            imgFront: 'images/4.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 10,
            color: 'red',
            number: 'four',
            imgFront: 'images/4-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 11,
            color: 'red',
            number: 'four',
            imgFront: 'images/4-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 12,
            color: 'black',
            number: 'four',
            imgFront: 'images/4-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 13,
            color: 'black',
            number: 'five',
            imgFront: 'images/5.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 14,
            color: 'red',
            number: 'five',
            imgFront: 'images/5-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 15,
            color: 'red',
            number: 'five',
            imgFront: 'images/5-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 16,
            color: 'black',
            number: 'five',
            imgFront: 'images/5-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 17,
            color: 'black',
            number: 'six',
            imgFront: 'images/6.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 18,
            color: 'red',
            number: 'six',
            imgFront: 'images/6-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 19,
            color: 'red',
            number: 'six',
            imgFront: 'images/6-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 20,
            color: 'black',
            number: 'six',
            imgFront: 'images/6-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 21,
            color: 'black',
            number: 'seven',
            imgFront: 'images/7.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 22,
            color: 'red',
            number: 'seven',
            imgFront: 'images/7-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 23,
            color: 'red',
            number: 'seven',
            imgFront: 'images/7-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 24,
            color: 'black',
            number: 'seven',
            imgFront: 'images/7-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 25,
            color: 'black',
            number: 'eight',
            imgFront: 'images/8.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 26,
            color: 'red',
            number: 'eight',
            imgFront: 'images/8-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 27,
            color: 'red',
            number: 'eight',
            imgFront: 'images/8-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 28,
            color: 'black',
            number: 'eight',
            imgFront: 'images/8-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 29,
            color: 'black',
            number: 'nine',
            imgFront: 'images/9.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 30,
            color: 'red',
            number: 'nine',
            imgFront: 'images/9-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 31,
            color: 'red',
            number: 'nine',
            imgFront: 'images/9-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 32,
            color: 'black',
            number: 'nine',
            imgFront: 'images/9-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 33,
            color: 'black',
            number: 'ten',
            imgFront: 'images/10.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 34,
            color: 'red',
            number: 'ten',
            imgFront: 'images/10-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 35,
            color: 'red',
            number: 'ten',
            imgFront: 'images/10-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 36,
            color: 'black',
            number: 'ten',
            imgFront: 'images/10-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 37,
            color: 'black',
            number: 'ace',
            imgFront: 'images/A.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 38,
            color: 'red',
            number: 'ace',
            imgFront: 'images/A-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 39,
            color: 'red',
            number: 'eleven',
            imgFront: 'images/A-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 40,
            color: 'black',
            number: 'ace',
            imgFront: 'images/A-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 41,
            color: 'black',
            number: 'jack',
            imgFront: 'images/J.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 42,
            color: 'red',
            number: 'jack',
            imgFront: 'images/J-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 43,
            color: 'red',
            number: 'jack',
            imgFront: 'images/J-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 44,
            color: 'black',
            number: 'jack',
            imgFront: 'images/J-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 45,
            color: 'black',
            number: 'queen',
            imgFront: 'images/Q.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 46,
            color: 'red',
            number: 'queen',
            imgFront: 'images/Q-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 47,
            color: 'red',
            number: 'queen',
            imgFront: 'images/Q-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 48,
            color: 'black',
            number: 'queen',
            imgFront: 'images/Q-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 49,
            color: 'black',
            number: 'king',
            imgFront: 'images/K.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 50,
            color: 'red',
            number: 'king',
            imgFront: 'images/K-1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 51,
            color: 'red',
            number: 'king',
            imgFront: 'images/K-2.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 52,
            color: 'black',
            number: 'king',
            imgFront: 'images/K-3.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 53,
            color: 'black',
            number: 'joker',
            imgFront: 'images/Joker_1.jpg',
            imgBack: 'images/Card_Back.jpg'
        },
        {
            id: 54,
            color: 'red',
            number: 'joker',
            imgFront: 'images/Joker_2.jpg',
            imgBack: 'images/Card_Back.jpg'
        }
    ]);

    return (
        <CardContext.Provider value={[cards, setCards]}>
            {props.children}
        </CardContext.Provider>
    )

}