import React from 'react';
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {deleteCardAction, toggleLikeAction} from "../../store/cardsReducer";

const CardPage = () => {
    const cards = useSelector(state => state.cards.cards);
    const dispatch = useDispatch();
    const deleteCard = (id) => {
        console.log(id)
        dispatch(deleteCardAction(id))
    }
    const toggleLike = (id) => {
        console.log(id)
        dispatch(toggleLikeAction(id))
    }


    return (
        <div>
            {cards.map(card => {
                    return <Card key={card.id}
                                 card={card}
                                 toggleLike={toggleLike}
                                 deleteCard={deleteCard}/>
                }
            )}
        </div>
    );
};

export default CardPage;