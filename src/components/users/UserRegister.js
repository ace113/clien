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
import * as action from '../../actions/user.actions'

class UserRegister extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fname: null,
            lname: null,
            email: null,
            address: null,
            contact: null,
            password: null,
            password2: null
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state;
        this.props.signup(data)
        if (!this.props.errorMessage) {
            this.props.history.push('/verifyemail')
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="p-5">
                        <Col md={6}>
                            <h4 className="text-center">User Register</h4>
                            <Form onSubmit={this.handleSubmit}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup >
                                            <Input
                                                name="fname"
                                                type="text"
                                                id="fname"
                                                placeholder="First Name"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input
                                                name="lname"
                                                type="text"
                                                id="lname"
                                                placeholder="Last Name"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
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
                                        name="address"
                                        type="text"
                                        id="address"
                                        placeholder="Address"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        name="contact"
                                        type="tel"
                                        id="contact"
                                        placeholder="Phone no."
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
                                <FormGroup>
                                    <Input
                                        name="password2"
                                        type="password"
                                        id="password2"
                                        placeholder="Confirm Password"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <Button className="btn btn-info btn-block" type="submit">Register</Button>
                                <a href="/user/login" className="btn btn-info btn-block">Already Registered</a>
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
        errorMessage: state.user.errorMessage
    }
}


export default connect(mapStateToProps, action)(UserRegister)
