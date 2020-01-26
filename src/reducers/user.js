import {
    USER_SIGN_UP,
    USER_SIGN_IN,
    USER_GET_DATA,
    USER_SIGN_OUT,
    USER_ERROR  
} from '../actions/types'

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMessage: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case USER_SIGN_UP: 
            return{...state, token: action.payload, isAuthenticated: true, errorMessage: ''}
        case USER_ERROR:
            return {...state, errorMessage: action.payload }
        default:
            return state
    }
}