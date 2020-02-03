import {
    VENDOR_REGISTER
} from '../actions/types'

const DEFAULT_STATE = {  
    errorMessage: '',
    message: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case VENDOR_REGISTER:
            return { ...state, message: action.payload, errorMessage: ''}
        default: 
            return state;
    }
}