import React from 'react';
import Card from "../Card/Card";

const CardPage = ({cards, isFilterEnable, toggleLike, deleteCard}) => {

    return (
        <div className={'p-10'}>
            <div className={'grid grid-cols-4 gap-10'}>
                {(isFilterEnable && (cards.length > 0)) ?
                    cards.map(card => {
                        return <Card key={card.char_id}
                                     card={card}
                                     toggleLike={toggleLike}
                                     deleteCard={deleteCard}/>
                    }) :
                    cards.filter(card => card.isLiked).map(card => {
                        return <Card key={card.char_id}
                                     card={card}
                                     toggleLike={toggleLike}
                                     deleteCard={deleteCard}/>
                    })
                }
            </div>
        </div>
    );
};

export default CardPage;