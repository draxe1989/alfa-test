import React from 'react';
import LikeButton from "../LikeButton/LikeButton";

const Card = ({card, deleteCard, toggleLike}) => {

    return (
        <div className={'bg-amber-600'}>
            <img className={'h-3/4 w-full object-cover'} src={card.img} alt=""/>
            <div className={'p-2'}>
                <p>Name: {card.name}</p>
                <p>Nickname: {card.nickname}</p>
                <div>
                    <LikeButton callback={()=>toggleLike(card.char_id)}/>
                    <button onClick={()=>deleteCard(card.char_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Card;