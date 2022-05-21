import {loadCardsAction, setNumberOfImagesAction} from "../store/cardsReducer";

const URL = 'https://www.breakingbadapi.com/api/characters/?limit=12'

export const fetchCards = () => {
    return (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                dispatch(loadCardsAction(json))
                dispatch(setNumberOfImagesAction(json.length))
            })
            .catch(e=>console.log(e))
    }
}
