import { combineReducers } from 'redux'
import userReducers from './userReducers'
import vendorReducers from './vendorReducers'
import homeReducers from './homeReducers'
import catagoryReducers from './catagoryReducers'

export default combineReducers({
    user: userReducers,
    vendor: vendorReducers,
    home: homeReducers,
    catagory: catagoryReducers
})