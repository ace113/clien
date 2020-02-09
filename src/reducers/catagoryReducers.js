import {
    GET_CATAGORY,
    ERROR
} from '../actions/types'

const DEFAULT_STATE = {
    errorMessage: '',
    catagory: []
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case GET_CATAGORY: 
            return { ...state, catagory: action.payload, errorMessage:''}
        case ERROR: 
            return { ...state, catagory: action.payload, errorMessage:''}
        default: 
            return state
    }
}