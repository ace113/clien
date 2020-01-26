import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import CustomInputs from '../CustomInputs'
import {
    Button,
    Form,
    Row,
    Col
} from 'reactstrap'

import * as actions from '../../actions/vendor.action'

class VendorRegister extends Component {
    constructor(props) {
        super(props)
    
       
    }

    async onSubmit(formData){
        console.log('data', formData)
    }
    
    render() {
        const {handleSubmit} = this.props
        return (
            <div>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                  <Row>
                      <Col m="12" md={{ size: 4, offset: 4 }}>
                      <fieldset>
                            <Field
                                name="vendorName"
                                type="text"
                                id="vendorName"
                                label="VendorName"
                                placeholder="Enter Company Name"
                                component={CustomInputs}
                            />
                        </fieldset>                        
                        <fieldset>
                            <Field
                                name="vendorEmail"
                                type="email"
                                id="email"
                                label="Email"
                                placeholder="example@example.com"
                                component={CustomInputs}
                            />
                        </fieldset>
                        <fieldset>
                            <Field
                                name="VendorAddress"
                                type="text"
                                id="address"
                                label="Address"
                                placeholder="Enter Address"
                                component={CustomInputs}
                            />
                        </fieldset>
                        <fieldset>
                            <Field
                                name="vendorContact"
                                type="tel"
                                id="contact"
                                label="Contact No."
                                placeholder="Enter phone no"
                                component={CustomInputs}
                            />
                        </fieldset>
                        <fieldset>
                            <Field
                                name="vendorLogo"
                                type="file"
                                id="vendorLogo"
                                label="vendorLogo"                                
                                component={CustomInputs}
                            />
                        </fieldset>
                        <fieldset>
                            <Field
                                name="vendorDoc"
                                type="file"
                                id="vendorDoc"
                                label="vendorDoc"
                                className="form-control-file"                                
                                component={CustomInputs}
                            />
                        </fieldset>

                        {this.props.errorMessage ?
                            <div className="alert alert-danger">
                                {this.props.errorMessage}
                            </div>
                            : null}

                        <Button type="submit" className="btn btn-info btn-block">Submit</Button>
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
)(VendorRegister)
