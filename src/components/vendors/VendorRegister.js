import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Input,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap'
import { connect } from 'react-redux'
import * as action from '../../actions/vendor.actions'

class VendorRegister extends Component {

    constructor(props) {
        super(props)

        this.state = {
            vendorName: null,
            vendorEmail: null,
            vendorAddress: null,
            vendorContact: null,
            // vendorLogo: null,
            file: null
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('vendorLogo',this.state);       
    
        this.props.vendorRegister(formData)
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleFileChange = e => {  
        this.setState({
            file: e.target.files[0]
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <h4 className="text-center">Vendor Register</h4>
                    <Form onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Input
                                        name="vendorLogo"
                                        type="file"
                                        id="vendorLogo"
                                        onChange={this.handleFileChange}
                                    />
                                </FormGroup>
                                <img src={this.state.vendorLogo} style={{ width: '100px', height: '100px'}} alt="logo" />
                            </Col>
                            <Col md={8}>
                                <FormGroup>
                                    <Input
                                        name="vendorName"
                                        type="text"
                                        id="vendorName"
                                        placeholder="Company Name"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        name="vendorEmail"
                                        type="email"
                                        id="vendorEmail"
                                        placeholder="Company Email"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        name="vendorContact"
                                        type="tel"
                                        id="vendorContact"
                                        placeholder="Company Phone No."
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        name="vendorAddress"
                                        type="text"
                                        id="vendorAddress"
                                        placeholder="Company Address"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <Button className="btn btn-info btn-block" type="submit">Register</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.vendor.errorMessage
    }
}

export default connect(mapStateToProps, action)(VendorRegister)
