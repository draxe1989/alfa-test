import React from 'react';
import LikeButton from "../LikeButton/LikeButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import s from './Card.module.css'

const Card = ({card, deleteCard, toggleLike, countImage}) => {

    return (
            <div className={s.card}>
                <img onLoad={countImage} src={card.img} alt=""/>
                <div>
                    <div>
                        <LikeButton isLiked={card.isLiked} callback={()=>toggleLike(card.char_id)}/>
                        <DeleteButton callback={()=>deleteCard(card.char_id)}/>
                    </div>
                    <div>
                        <p>{card.nickname}</p>
                        <p>{card.name}</p>
                    </div>
                </div>
            </div>
    );
};

export default Card;