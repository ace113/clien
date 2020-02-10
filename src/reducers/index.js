import { combineReducers } from 'redux'
import userReducers from './userReducers'
import vendorReducers from './vendorReducers'
import homeReducers from './homeReducers'
import catagoryReducers from './catagoryReducers'
import serviceReducers from './serviceReducers'
import dashboardReducers from './dashboardReducers'

export default combineReducers({
    user: userReducers,
    vendor: vendorReducers,
    home: homeReducers,
    catagory: catagoryReducers,
    service: serviceReducers,
    dash: dashboardReducers
})