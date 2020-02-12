import React, { Component } from 'react'
import  Maps  from './Maps'
import {
    Container,
    Row,
    Col,
    Form,
    Input,
    FormGroup,
    Button
} from 'reactstrap'

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="p-5">
                        <Col md={6} className="mb-3">
                            <h3>Contact Us</h3>
                            <p>Reach out to us for any inquiry</p>
                            <Form>
                                <FormGroup>
                                    <Input
                                        name="name"
                                        type="text"
                                        id="text"
                                        placeholder="Your Name"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
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
                                        name="subject"
                                        type="text"
                                        id="subject"
                                        placeholder="Subject"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        name="message"
                                        type="textarea"
                                        id="message"
                                        placeholder="Your message"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <Button className="btn btn-info btn-block" type="submit">Submit</Button>
                            </Form>
                        </Col>
                        <Col md={6}>
                            {/* <div style={{ height: '250px', backgroundColor: 'gray' }}></div> */}
                            <Maps
                            google={this.props.google}
                            center={{ lat: 27.6704504, lng: 85.3216354 }}
                            height='300px'
                            zoom={17}
                        />
                            <ul>
                                <li>company@mail.com</li>
                                <li>www.company.com</li>
                                <li>Address line 1</li>
                                <li>+977-555555555</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContactUs
