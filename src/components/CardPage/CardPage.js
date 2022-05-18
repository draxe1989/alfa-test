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
        <div className={'p-8'}>
            {cards.isLoading ? <div className={'absolute h-screen w-screen bg-slate-500 text-amber-50'}>Loading</div> : null}
            <div className={'grid grid-cols-4 gap-10'}>
                {(cards.isFilterEnable && (cards.cards.length > 0)) ?
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
        </div>
    );
};

export default CardPage;