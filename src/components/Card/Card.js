import React from 'react';


const Card = ({card, deleteCard, toggleLike}) => {

    return (
        <div>
            <img src={card.image} alt=""/>
            <p>{card.description}</p>
            <button onClick={()=>toggleLike(card.id)}>Like</button>
            <button onClick={()=>deleteCard(card.id)}>Delete</button>
        </div>
    );
};

export default Card;