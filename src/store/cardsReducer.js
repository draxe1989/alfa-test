import image from "../assets/Image.jpg";

const   ENABLE_FILTER = 'ENABLE_FILTER',
        DISABLE_FILTER = 'DISABLE_FILTER',
        FETCH_CARDS = 'FETCH_CARDS',
        DELETE_CARD = 'DELETE_CARD',
        TOGGLE_LIKE = 'TOGGLE_LIKE'


const defaultState = {
    isFilterEnable: true,
    cards: [
        {
            id: 1,
            image: image,
            description: 'consectetur adipisicing elit. Ea, incidunt.',
            isLiked: false,
        },
        {
            id: 2,
            image: image,
            description: 'Lorem adipisicing elit. Ea, incidunt.',
            isLiked: false,
        },
        {
            id: 3,
            image: image,
            description: 'Ea, incidunt.',
            isLiked: true,
        },
    ],
}

export const cardsReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ENABLE_FILTER:
            return {...state, isFilterEnable: true};
        case DISABLE_FILTER:
            return {...state, isFilterEnable: false};
        case FETCH_CARDS:
            return {...state, cards: action.payload};
        case DELETE_CARD:
            return {...state, cards: state.cards.filter(item => item.id !== action.payload)};
        case TOGGLE_LIKE:
            return {...state, cards: state.cards.map(card=>{
                    if (card.id === action.payload) {
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
export const fetchCardsAction = (payload) => ({type: FETCH_CARDS, payload})
export const deleteCardAction = (payload) => ({type: DELETE_CARD, payload})
export const toggleLikeAction = (payload) => ({type: TOGGLE_LIKE, payload})