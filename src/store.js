import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import axios from 'axios'

const jwtToken = localStorage.getItem('JWT_TOKEN')

axios.defaults.headers.common['Authorization'] = jwtToken

const initialState = {
    user: {
        token : jwtToken,
        isAuthenticated: jwtToken ? true : false
    }
}

const middleWare = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWare))
)

export default store;