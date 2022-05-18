import React from 'react';

const Card = ({card, deleteCard, toggleLike}) => {

    return (
        <div>
            <img src={card.img} alt=""/>
            <p>Name: {card.name}</p>
            <p>Nickname: {card.nickname}</p>
            <button  onClick={()=>toggleLike(card.char_id)}>Like</button>
            <button  onClick={()=>deleteCard(card.char_id)}>Delete</button>
        </div>
    );
};

export default Card;