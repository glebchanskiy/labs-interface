import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import formReducer from "./reducers/form-reducer";
import loggingMiddleware from "./logging-middleware";

let reducers = combineReducers({
 formReducer
})

let store = createStore(
 reducers,
 applyMiddleware(loggingMiddleware)
 )

window['store'] = store

export default store