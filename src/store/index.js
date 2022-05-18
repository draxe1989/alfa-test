import {applyMiddleware, combineReducers, createStore} from "redux";
import {cardsReduser} from "./cardsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    cards: cardsReduser,
})

export const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk)));
