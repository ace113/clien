import axios from 'axios'
import{
    USER_SIGN_UP,
    USER_SIGN_OUT,
    USER_SIGN_IN,
    USER_GET_DATA,
    USER_ERROR
} from './types'

export const oauthGoogle = data => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/users/oauth/google',{
            access_token: data
        })

        dispatch({
            type: USER_SIGN_UP,
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
            type: USER_SIGN_UP,
            payload: res.data.token
        })

        localStorage.setItem('JWT_TOKEN', res.data.token)
    }
}

export const signUp = data => {
    console.log('action data:', data)
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/users/signup', data)

            dispatch({
                type: USER_SIGN_UP,
                payload: res.data.message
            })
            console.log('res', res)
            // localStorage.setItem('JWT_Token', res.data.token)
        } catch(err){
            dispatch({
                type: USER_ERROR,
                payload: 'signup error'
            })
        }
    }
}

export const signIn = data => {
    return async (dispatch) => {
        /*
            step1: Use the data and to make HTTP request to our Backend and send it along
            step2: Take the Backend's response (jwtToken is here now!)
            step3: Dispatch user just signed up (with JwtToken)
            step4: Save the jwtToken into our localStorage/cookie
        */
       console.log('data', data)

        try {
            const res = await axios.post('http://localhost:5000/users/signin', data)
            console.log('res', res)

            dispatch({
                type: USER_SIGN_IN,
                payload: res.data.token
            })
            localStorage.setItem('JWT_Token', res.data.token)

        } catch (err) {
            dispatch({
                type: USER_ERROR,
                payload: 'Email is already in use'
            })
        }
    }
}