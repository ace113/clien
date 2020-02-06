import React, { Component } from 'react'
import { Row, Col, Card, Container } from 'reactstrap'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={3}>
                            <Card>
                                <ul>
                                    <li><h2>Profile</h2></li>
                                    <li>Name</li>
                                    <li>Email</li>
                                </ul>
                            </Card>

                        </Col>
                        <Col md={8}>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dashboard
