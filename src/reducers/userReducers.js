import {
    USER_LOGIN,
    USER_REGISTER,
    ERROR   
} from '../actions/types'

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMessage: '',
    message: ''
}

export default (state = DEFAULT_STATE, action)=>{
    switch(action.type){
        case USER_REGISTER:
            return { ...state, message: action.payload, isAuthenticated: false, errorMessage: ''}
        case USER_LOGIN:
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: ''}
        case ERROR:
            return { ...state, errorMessage: action.payload}
        default:
            return state;
    }
}