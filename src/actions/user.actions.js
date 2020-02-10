import {
    USER_REGISTER,    
    ERROR,
    USER_LOGIN,
    USER_SIGN_OUT,
    // GET_USER_INFO,
    GET_CATAGORY
} from './types'
import axios from 'axios'

export const oauthGoogle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/users/oauth/google',{
            access_token: data
        })

        dispatch({
            type: USER_LOGIN,
            payload: res.data.token
        })

        localStorage.setItem('JWT_TOKEN', res.data.token);

    }
}

export const oauthFacebook = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/users/oauth/facebook',{
            access_token: data
        })

        dispatch({
            type: USER_LOGIN,
            payload: res.data.token
        })

        localStorage.setItem('JWT_TOKEN', res.data.token)
    }
}

export const signup = data => {
    return async dispatch => {
        try{
            const res = await axios.post('http://localhost:5000/users/signup', data)

            dispatch({
                type: USER_REGISTER,
                payload: res.data.message
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: 'User Signup error'
            })
        }
    }
}

export const signin = data => {    
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/users/signin', data)
            console.log('res:',res)
            dispatch({
                type: USER_LOGIN,
                payload: res.data.token
            })

            localStorage.setItem('JWT_TOKEN', res.data.token)
            
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: 'Email or password is not correct'
            })
        }
    }
}

export const signout = () => {
    return async dispatch => {

        localStorage.removeItem('JWT_TOKEN')

        dispatch({
            type: USER_SIGN_OUT,
            payload: ''
        })
    }
}

// export const getUserProfile = () => {
//     return async dispatch => {
//         const res = await axios.get('http://localhost:5000/users/secret')

//         // console.log('res',res)

//         dispatch({
//             type: GET_USER_INFO,
//             payload: res.data.user
//         })
//     }
// }

export const getCatagory = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:5000/service/catagory')

        dispatch({
            type: GET_CATAGORY,
            payload: res.data
        })
    }
}