import React, { Component } from 'react'
import { Row, Col, Card, Container } from 'reactstrap'
import { connect } from 'react-redux'
import * as action from '../../actions/user.actions'

class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             fname: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    
    componentDidMount() {
        this.props.getUserProfile();

    }

    render() {      
        return (
            <div>
                <Container>
                    <Row >
                        <Col md={3}>
                            <Card>
                                <ul>
                                    <li>
                                       
                                    </li>
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
function mapStateToProps(state) {

    return {    
        userinfo: state.user.userinfo
    }


}

export default connect(mapStateToProps, action)(Dashboard)
