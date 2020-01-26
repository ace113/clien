import React, { Component } from 'react'
import  Maps  from './Maps'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row>
                    <Col md='6'>
                        <Form>
                            <h2>CONTACT US</h2>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Enter your name here"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter your email here"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Message</Label>
                                <Input type="textarea" name="message" id="message" placeholder="Enter your message here"></Input>
                            </FormGroup>
                            <Button type="submit" className="btn btn-info btn-block">SUBMIT</Button>
                        </Form>
                    </Col>
                    <Col md='6' className="mt-3">
                        <Maps
                            google={this.props.google}
                            center={{ lat: 27.6704504, lng: 85.3216354 }}
                            height='300px'
                            zoom={17}
                        />
                        
                    </Col>
                </Row>
                </Container>               
            </div>
        )
    }
}

export default ContactUs
