import {legacy_createStore as createStore ,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './userRedux/userReducer'

const rootReducer = combineReducers({
    user:UserReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store

