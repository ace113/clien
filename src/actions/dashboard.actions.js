import {
    GET_USER_INFO
} from './types'
import axios from 'axios'

export const getUserProfile = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:5000/users/secret')

        // console.log('res',res)

        dispatch({
            type: GET_USER_INFO,
            payload: res.data.user
        })
    }
}
