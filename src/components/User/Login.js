import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import {    
    Button,
    Form,
    FormGroup,
    Label,
    Input  
} from 'reactstrap'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.onSubmit = this.onSubmit.bind(this)
        this.responseGoogle = this.responseGoogle.bind(this)
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    onSubmit(formData) {
        console.log(formData)
    }   

    responseGoogle(res) {
        console.log(res)
    }

    responseFacebook(res) {
        console.log(res)
    }
    
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" className="form-control" id="email" name="email" value={this.props.value} onChange={this.props.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" className="form-control" id="password" name="password" value={this.props.value} onChange={this.props.onChange} />
                    </FormGroup>
                    <Button type="submit" className="btn btn-info btn-block">Sign In</Button>
                </Form>
                <div className="separator"></div>
                <FacebookLogin
                    appId=""
                    textButton="Facebook"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="btn btn-primary btn-block"
                />
                <GoogleLogin
                    clientId=""
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    className="btn btn-outline-danger"
                />
            </div>
        )
    }
}

export default Login
