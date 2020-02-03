import { combineReducers } from 'redux'
import userReducers from './userReducers'
import vendorReducers from './vendorReducers'

export default combineReducers({
    user: userReducers,
    vendor: vendorReducers
})