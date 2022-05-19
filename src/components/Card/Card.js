import React from 'react';
import LikeButton from "../LikeButton/LikeButton";
import DeleteButton from "../DeleteButton/DeleteButton";

const Card = ({card, deleteCard, toggleLike}) => {

    return (
        <div className={'bg-amber-600 overflow-hidden rounded-lg relative z-0'}>
            <img className={'h-full w-full object-cover'} src={card.img} alt=""/>
            <div className={'absolute z-10 w-full p-2 bottom-0 text-amber-50 flex justify-between'}>
                <div>
                    <p className={'text-5xl'} style={{fontFamily: "breakingBad"}}>{card.nickname}</p>
                    <p>{card.name}</p>
                </div>
                <div>
                    <DeleteButton callback={()=>deleteCard(card.char_id)}/>
                    <LikeButton isLiked={card.isLiked} callback={()=>toggleLike(card.char_id)}/>
                </div>
            </div>
        </div>
    );
};

export default Card;