import {
    GET_DATA_HOME,
    ERROR
} from '../actions/types'

const DEFAULT_STATE = {
    errorMessage: '',
    data: []
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case GET_DATA_HOME: 
            return { ...state, data: action.payload, errorMessage:''}
        case ERROR: 
            return { ...state, data: action.payload, errorMessage:''}
        default: 
            return state
    }
}