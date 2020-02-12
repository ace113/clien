import React, { Component } from 'react'
import { Row, Col, Card, Container } from 'reactstrap'
import { connect } from 'react-redux'
import * as action from '../../actions/dashboard.actions'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.props.getUserProfile();

    }

    render() {
        const { userinfo } = this.props
        const display = userinfo.map((view, i) => {
            return <div key={i}>
                <Card style={{ height: '50vh', padding: '10px'}}>
                    <ul>
                        <li>
                            <h2>Dashboard</h2>
                        </li>
                        <li>Name: {view.fname}  {view.lname}</li>
                        <li>Email: {view.email} </li>

                    </ul>
                </Card>
            </div>
        })

        return (
            <div>
                <Container>
                    <Row className="p-5">
                        <Col md={4}>
                            {display}

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
        userinfo: state.dash.userinfo
    }


}

export default connect(mapStateToProps, action)(Dashboard)
