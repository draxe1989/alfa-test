import {loadCardsAction, toggleIsLoadingAction} from "../store/cardsReducer";

const URL = 'https://www.breakingbadapi.com/api/characters'

export const fetchCards = () => {
    return (dispatch) => {
        fetch(URL)
            .then(response => {
                dispatch(toggleIsLoadingAction())
                return response.json()
            })
            .then(json => {
                dispatch(toggleIsLoadingAction())
                dispatch(loadCardsAction(json))
            })
    }
}
