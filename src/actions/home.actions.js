import axios from 'axios'
import {
    GET_DATA_HOME,
    ERROR
} from './types'

export const getdata = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:5000/service')
        // console.log(res)

        dispatch({
            type: GET_DATA_HOME,
            payload: res.data
        })        
    }
}