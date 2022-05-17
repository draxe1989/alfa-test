import {combineReducers, createStore} from "redux";
import {cardsReduser} from "./cardsReducer";


const rootReducer = combineReducers({
    cards: cardsReduser,
})

export const store = createStore(rootReducer);
