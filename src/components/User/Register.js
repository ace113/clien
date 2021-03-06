import React, { Component } from 'react'
import {reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions/user.action'
import CustomInputs from '../CustomInputs'

import {
    Button,
    Form,
    Row,
    Col
} from 'reactstrap'

class Register extends Component {

    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this) 
    }

    async onSubmit(formData){        
        console.log('data', formData)
        await this.props.signUp(formData)
        if(!this.props.errorMessage) {
            this.props.history.push('/verifyemail')
        }     

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
                                name="fname"
                                type="text"
                                id="fname"
                                label="FirstName"
                                placeholder="Enter First Name"
                                component={CustomInputs}
                            />
                        </fieldset>
                        <fieldset>
                            <Field
                                name="lname"
                                type="text"
                                id="lname"
                                label="LastName"
                                placeholder="Enter Last Name"
                                component={CustomInputs}
                            />
                        </fieldset>
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
                                name="address"
                                type="text"
                                id="address"
                                label="Address"
                                placeholder="Enter Address"
                                component={CustomInputs}
                            />
                        </fieldset>
                        <fieldset>
                            <Field
                                name="contact"
                                type="tel"
                                id="contact"
                                label="Contact No."
                                placeholder="Enter phone no"
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
                        <fieldset>
                            <Field
                                name="password2"
                                type="password"
                                id="password2"
                                label="Confirm Password"
                                placeholder="Re-enter your password"
                                component={CustomInputs}
                            />
                        </fieldset>

                        {this.props.errorMessage ?
                            <div className="alert alert-danger">
                                {this.props.errorMessage}
                            </div>
                            : null}

                        <Button type="submit" className="btn btn-info btn-block">Register</Button>
                        <a href="/signin" className="btn btn-outline-info btn-block">Already Registered</a>
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
    reduxForm({ form: 'signup' })
)(Register)
