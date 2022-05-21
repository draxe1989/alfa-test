const   ENABLE_FILTER = 'ENABLE_FILTER',
        DISABLE_FILTER = 'DISABLE_FILTER',
        LOAD_CARDS = 'LOAD_CARDS',
        DELETE_CARD = 'DELETE_CARD',
        TOGGLE_LIKE = 'TOGGLE_LIKE',
        COUNT_IMAGE = 'COUNT_IMAGE',
        SET_NUMBER_OF_IMAGES = 'SET_NUMBER_OF_IMAGES';


const defaultState = {
    isFilterEnable: true,
    cards: [],
    imageCounter: 0,
    numberOfImagesAtPage: null,
    firstLoading: true,
}

export const cardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ENABLE_FILTER:
            return {...state, isFilterEnable: true};
        case DISABLE_FILTER:
            return {...state, isFilterEnable: false};
        case LOAD_CARDS:
            return {...state, cards: action.payload};
        case COUNT_IMAGE:
            if (!state.firstLoading) {
                return state
            }
            const newState = {...state}
            newState.imageCounter = newState.imageCounter + 1
            if (newState.imageCounter === newState.numberOfImagesAtPage) {
                newState.firstLoading = false
            }
            return newState
        case SET_NUMBER_OF_IMAGES:
            return {...state, numberOfImagesAtPage: state.numberOfImagesAtPage = action.payload};
        case DELETE_CARD:
            return {...state, cards: state.cards.filter(item => item.char_id !== action.payload)};
        case TOGGLE_LIKE:
            return {...state, cards: state.cards.map(card=>{
                    if (card.char_id === action.payload) {
                        card.isLiked = !card.isLiked
                    }
                    return card
                })}
        default:
            return state;
    }
}

export const enableFilterAction = () => ({type: ENABLE_FILTER})
export const disableFilterAction = () => ({type: DISABLE_FILTER})
export const countImageAction = () => ({type: COUNT_IMAGE})
export const loadCardsAction = (payload) => ({type: LOAD_CARDS, payload})
export const setNumberOfImagesAction = (payload) => ({type: SET_NUMBER_OF_IMAGES, payload})
export const deleteCardAction = (payload) => ({type: DELETE_CARD, payload})
export const toggleLikeAction = (payload) => ({type: TOGGLE_LIKE, payload})