import {   
    GET_USER_INFO,
    ERROR
} from '../actions/types'

const DEFAULT_STATE = {  
    errorMessage: '',  
    userinfo: []
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {       
        case GET_USER_INFO: 
            return { ...state, userinfo: action.payload, errorMessage: ''}        
        case ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
}