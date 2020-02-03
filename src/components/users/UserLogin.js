import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Input,
    Button,
    Container
} from 'reactstrap'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import * as action from '../../actions/user.actions'

class UserLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null
        }
        this.responseFacebook = this.responseFacebook.bind(this)
        this.responseGoogle = this.responseGoogle.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state

        this.props.signin(data)
        if (!this.props.errorMessage) {
            this.props.history.push('/')
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    async responseGoogle(res) {     
        await this.props.oauthGoogle(res.accessToken)
        if (!this.props.errorMessage) {
            this.props.history.push('/')
        }
    }

    async responseFacebook(res) {
        await this.props.oauthFacebook(res.accessToken)
        if (!this.props.errorMessage) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h4 className="text-center">User Login</h4>                   
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="your@email.com"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Your Password"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <Button className="btn btn-info btn-block" type="submit">Login</Button>
                        <a href="/user/register" className="btn btn-info btn-block">Register</a>
                    </Form>
                    <div>                       
                        <FacebookLogin
                            appId="786108551901872"
                            textButton="Continue with Facebook"
                            fields="name, email, picture"
                            autoLoad={false}
                            callback={this.responseFacebook}
                            cssClass="btn btn-primary btn-block mt-2 mb-2"
                        />
                         <GoogleLogin
                            clientId="508374324159-j3nh3sc2h1dgkmtq0b8gksfl73f87h49.apps.googleusercontent.com"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            className="btn btn-danger btn-block"
                            render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} 
                                className="btn btn-danger btn-block mb-2">
                                <i className="fa fa-google"></i> Continue with google
                                </button>
                            )}
                        />
                    </div>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.user.errorMessage
    }
}

export default connect(mapStateToProps, action)(UserLogin)
