import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from './reducer';

const store = createStore(itemsReducer, applyMiddleware(thunk));

export default store;