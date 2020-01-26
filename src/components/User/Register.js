import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions/user.action'

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: '',
            address: '',
            contact: '',
            password: '',
            password2: ''
        }

    }

    onSubmit = (formData) => {
        formData.preventDefault()

        const data = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            address: this.state.address,
            contact: this.state.contact,
            password: this.state.password,
            password2: this.state.password2

        }
        console.log('data', data)
        this.props.signUp(data) 

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input type="text" name="fname" id="fname" className="form-control" value={this.value} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input type="text" name="lname" id="lname" className="form-control" value={this.value} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="email" id="email" className="form-control" value={this.value} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Address</Label>
                        <Input type="text" name="address" id="address" className="form-control" value={this.value} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Contact</Label>
                        <Input type="tel" name="contact" id="contact" className="form-control" value={this.value} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" id="password" className="form-control" value={this.value} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input type="password" name="password2" id="password2" className="form-control" value={this.value} onChange={this.onChange} />
                    </FormGroup>
                    <Button type="submit" className="btn btn-info btn-block">Sign Up</Button>
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

export default compose(connect(mapStateToProps, actions))(Register)
