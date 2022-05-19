import {loadCardsAction, toggleIsLoadingAction} from "../store/cardsReducer";

const URL = 'https://www.breakingbadapi.com/api/characters/?limit=12'

export const fetchCards = () => {
    return (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                dispatch(toggleIsLoadingAction())
                dispatch(loadCardsAction(json))
            })
    }
}
