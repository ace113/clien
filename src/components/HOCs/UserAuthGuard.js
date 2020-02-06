import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (OriginalComponent) => {
    class MixedComponent extends Component {

        checkUserAuth() {
            if(!this.props.isAuth && !this.props.jwtToken){
                console.log('user not allowed')
                this.props.history.push('/')
            }
        }
        
        componentDidMount() {
            this.checkUserAuth()
        }

        componentDidUpdate() {
            this.checkUserAuth()
        }

        render() {
            return (
                <OriginalComponent {...this.props}/>
            )
        }
    }


    function mapStateToProps(state) {
        return {
            isAuth: state.user.isAuthenticated,
            jwtToken: state.user.token
        }
    }

    return connect(mapStateToProps)(MixedComponent)
}