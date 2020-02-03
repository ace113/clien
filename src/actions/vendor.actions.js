import axios from 'axios'
import {
    VENDOR_REGISTER
} from './types'


const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};

export const vendorRegister = data => {
    return async dispatch => {
        
        console.log('data:', data)
        // const res = await axios.post('http://localhost:5000/vendors/register', data, config)

        // console.log(res)

        // dispatch({
        //     type: VENDOR_REGISTER,
        //     payload: res.data
        // })
    }
}