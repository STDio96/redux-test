import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

// importing reducer
import mainReducer from './ducks/mainPage'
import albumReducer from './ducks/albumPage'

/* const rootReducer = combineReducers({
    mainReducer,
    albumReducer
}); */

const rootReducer = mainReducer;

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;