import image from "../assets/Image.jpg";

const ENABLE_FILTER = 'ENABLE_FILTER'
const DISABLE_FILTER = 'DISABLE_FILTER'
const FETCH_CARDS = 'FETCH_CARDS'
const DELETE_CARD = 'DELETE_CARD'
const TOGGLE_LIKE = 'TOGGLE_LIKE'


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
            return {...state, cards: state.cards.filter(item=>item.id!==action.payload)};
        case TOGGLE_LIKE:
            return {...state, cards: state.cards.map(item => (item.id === action.payload) ? item : {...item, isLiked: !item.isLiked})};
        default:
            return state;
    }
}

export const enableFilterAction = ()=> ({type: ENABLE_FILTER})
export const disableFilterAction = ()=> ({type: DISABLE_FILTER})
export const fetchCardsAction = (payload)=> ({type: FETCH_CARDS, payload})
export const deleteCardAction = (payload)=> ({type: DELETE_CARD, payload})
export const toggleLikeAction = (payload)=> ({type: TOGGLE_LIKE, payload})