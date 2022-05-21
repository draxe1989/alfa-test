import React from 'react';
import Card from "../Card/Card";
import s from './CardPage.module.css'

const CardPage = ({cards, isFilterEnable, toggleLike, deleteCard, countImage}) => {

    return (
        <div className={s.cardPage}>
            <div>
                {(isFilterEnable && (cards.length > 0)) ?
                    cards.map(card => {
                        return <Card key={card.char_id}
                                     card={card}
                                     toggleLike={toggleLike}
                                     deleteCard={deleteCard}
                                     countImage={countImage}/>
                    }) :
                    cards.filter(card => card.isLiked).map(card => {
                        return <Card key={card.char_id}
                                     card={card}
                                     toggleLike={toggleLike}
                                     deleteCard={deleteCard}
                                     />
                    })
                }
            </div>
        </div>
    );
};

export default CardPage;