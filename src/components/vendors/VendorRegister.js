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
            vendorLogo: null,
            previewLogo: null
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        // const data = this.state
        let data = new FormData()
        data.append('vendorLogo', this.state.vendorLogo)
        data.append('vendorName', this.state.vendorName)
        data.append('vendorEmail', this.state.vendorEmail)
        data.append('vendorAddress', this.state.vendorAddress)
        data.append('vendorContact', this.state.vendorContact)

        this.props.vendorRegister(data)
        if (!this.props.errorMessage) {
            this.props.history.push('/after-register')
        }

    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleFileChange = e => {
        this.setState({
            vendorLogo: e.target.files[0],
            previewLogo: URL.createObjectURL(e.target.files[0])
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="p-5">
                        <Col md={12}>
                            <h4 className="text-center">Vendor Register</h4>
                            <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
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
                                        <img src={this.state.previewLogo} style={{ width: '100px', height: '100px' }} alt="logo" />
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
                        </Col>
                    </Row>
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
