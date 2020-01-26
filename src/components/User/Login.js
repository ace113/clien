import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import CustomInputs from '../CustomInputs'
import {
    Button,
    Form,
    Row,
    Col
} from 'reactstrap'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/user.action'

class Login extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
        this.responseGoogle = this.responseGoogle.bind(this)
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    async onSubmit(formData) {
        console.log(formData)
    }

    async responseGoogle(res) {
        console.log(res)
        await this.props.oauthGoogle(res.accessToken)
    }

    async responseFacebook(res) {
        await this.props.oauthFacebook(res.accessToken)
        console.log(res)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                    <Row>
                        <Col m="12" md={{ size: 4, offset: 4 }}>
                            <fieldset>
                                <Field
                                    name="email"
                                    type="email"
                                    id="email"
                                    label="Email"
                                    placeholder="example@example.com"
                                    component={CustomInputs}
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="password"
                                    type="password"
                                    id="password"
                                    label="Password"
                                    placeholder="Enter your password"
                                    component={CustomInputs}
                                />
                            </fieldset>

                            {this.props.errorMessage ?
                                <div className="alert alert-danger">
                                    {this.props.errorMessage}
                                </div>
                                : null}

                            <Button type="submit" className="btn btn-info btn-block">Login</Button>
                            <a href="/signup" className="btn btn-outline-info btn-block">Create an Acount</a>
                            <hr></hr>
                            <FacebookLogin
                                appId="786108551901872"
                                textButton="Continue with Facebook"
                                fields="name, email, picture"
                                callback={this.responseFacebook}
                                cssClass="btn btn-primary btn-block"
                            />
                            <br></br>
                            <GoogleLogin
                                clientId="508374324159-j3nh3sc2h1dgkmtq0b8gksfl73f87h49.apps.googleusercontent.com"                                
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                className="btn btn-danger btn-block"
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-danger btn-block"><i className="fa fa-google"></i> Continue with google</button>
                                  )}
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.user.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Login)
