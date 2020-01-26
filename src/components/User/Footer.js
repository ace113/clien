import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'

class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className="text-center bg-info" >
                    <Row className="p-5 mt-3">
                        <Col>
                            <h3>Address</h3>
                            <p>www.ableinfo.com</p>
                            <p>Kumaripati, Lalitpur</p>
                            <p>Kathmandu, Nepal</p>
                        </Col>
                        <Col>
                            <h5>Site</h5>
                        </Col>
                        <Col>
                            <h5>Company</h5>                            
                        </Col>
                        <Col>
                            <h5>Payment Options</h5>
                        </Col>
                    </Row>
                    <hr></hr>
                    <p>Copyright © 2020 Able Infotech. All rights reserved.</p>
                </Container>
            </div>
        )
    }
}

export default Footer
