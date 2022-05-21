import React from 'react';
import CardPage from "./CardPage";
import {useDispatch, useSelector} from "react-redux";
import {countImageAction, deleteCardAction, toggleLikeAction} from "../../store/cardsReducer";
import {useEffect} from "react";
import {fetchCards} from "../../asynkActions/cards";

const CardPageContainer = () => {
    const cards = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const deleteCard = (id) => {
        dispatch(deleteCardAction(id))
    }
    const toggleLike = (id) => {
        dispatch(toggleLikeAction(id))
    }
    const countImage = () => {
        dispatch(countImageAction())
    }
    useEffect(()=>dispatch(fetchCards()), [])

    return <CardPage
        cards={cards.cards}
        isLoading={cards.isLoading}
        isFilterEnable={cards.isFilterEnable}
        countImage={countImage}
        deleteCard={deleteCard}
        toggleLike={toggleLike}/>
};

export default CardPageContainer;