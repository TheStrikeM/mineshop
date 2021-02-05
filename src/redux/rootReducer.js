import {activeItem, test, modal, cards, cart} from './reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    activeItem,
    test,
    modal,
    cards,
    cart
});

export default rootReducer;