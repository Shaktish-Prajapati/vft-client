// creating store
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from 'redux'
import {rootReducer} from './rootReducer'

const middleware = [thunk] // we can pass multiple middleware
// creating store
const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;