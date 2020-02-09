import axios from 'axios'
import {
   GET_SERVICE
} from './types'

export const getservice = (data) => {
    return async dispatch => {
        const res = await axios.get(`http://localhost:5000/service/find/${data}`)
        // console.log(res)

        dispatch({
            type: GET_SERVICE,
            payload: res.data
        })        
    }
}