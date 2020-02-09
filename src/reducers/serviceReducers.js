import {
    GET_SERVICE,
    ERROR
} from '../actions/types'

const DEFAULT_STATE = {
    errorMessage: '',
    service: []
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_SERVICE:
            return { ...state, service: action.payload, errorMessage: '' }
        case ERROR:
            return { ...state, service: action.payload, errorMessage: '' }
        default:
            return state
    }
}