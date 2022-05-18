import React, {useEffect} from 'react';
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {deleteCardAction, toggleLikeAction} from "../../store/cardsReducer";
import {fetchCards} from "../../asynkActions/cards";

const CardPage = () => {
    const cards = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const deleteCard = (id) => {
        dispatch(deleteCardAction(id))
    }
    const toggleLike = (id) => {
        dispatch(toggleLikeAction(id))
    }
    useEffect(()=> {
        dispatch(fetchCards())
    },[])



    return (
        <div>
            {cards.isLoading ? <div>Loading</div> : null}
            {cards.isFilterEnable ?
                cards.cards.map(card => {
                    return <Card key={card.char_id}
                                 card={card}
                                 toggleLike={toggleLike}
                                 deleteCard={deleteCard}/>
                }) :
                cards.cards.filter(card => card.isLiked).map(card => {
                    return <Card key={card.char_id}
                                 card={card}
                                 toggleLike={toggleLike}
                                 deleteCard={deleteCard}/>
                })
            }
        </div>
    );
};

export default CardPage;