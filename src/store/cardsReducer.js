const   ENABLE_FILTER = 'ENABLE_FILTER',
        DISABLE_FILTER = 'DISABLE_FILTER',
        LOAD_CARDS = 'LOAD_CARDS',
        DELETE_CARD = 'DELETE_CARD',
        TOGGLE_LIKE = 'TOGGLE_LIKE',
        TOGGLE_LOADING = 'TOGGLE_LOADING';


const defaultState = {
    isFilterEnable: true,
    cards: [],
    isLoading: true,
}

export const cardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ENABLE_FILTER:
            return {...state, isFilterEnable: true};
        case DISABLE_FILTER:
            return {...state, isFilterEnable: false};
        case LOAD_CARDS:
            return {...state, cards: action.payload};
        case TOGGLE_LOADING:
            return {...state, isLoading: !state.isLoading};
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
export const toggleIsLoadingAction = () => ({type: TOGGLE_LOADING})
export const loadCardsAction = (payload) => ({type: LOAD_CARDS, payload})
export const deleteCardAction = (payload) => ({type: DELETE_CARD, payload})
export const toggleLikeAction = (payload) => ({type: TOGGLE_LIKE, payload})