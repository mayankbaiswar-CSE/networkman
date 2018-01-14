/**
 * Import statements.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from '../AppReducers';
/**
 * Create a store with thunk middleware. And add reducres to it.
 */
const reducers = {
    AppReducer
};


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

/**
 * Export the store holding state of whole application.
 */
export default store;