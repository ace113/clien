import React, { Component } from 'react'
import {
    Jumbotron,
    Card,
    // CardHeader,
    Button,
    CardBody,
    CardText,
    CardTitle,
    Container,
    Row,
    // Col
} from 'reactstrap'
import { connect } from 'react-redux'
import * as action from '../actions/home.actions'

class Indoor extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
        this.componentDidMount = this.componentDidMount.bind(this)

    }

    componentDidMount() {
        this.props.getcatagory();

    }

    render() {
        const { data } = this.props
        const indoor = data.map((view, key) => {
            return <Card style={{ width: '16rem' }} key={view._id} className="ml-4 mb-4 text-center shadow">
                <img variant="top" src="holder.js/100px180" alt="" />
                <CardBody>
                    <CardTitle>{view.serviceName}</CardTitle>
                    <CardText>
                        <small>{view.location}</small>
                    </CardText>
                    <div>
                        <Button color="info mb-2">Book Now</Button>
                    </div>                    
                    <div>                    
                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>                   
                </CardBody>
            </Card>
        })
        return (
            <div>
                {/* <Jumbotron> */}
                {/* <h1>This is Indoor Games page</h1> */}
                <img
                    src="https://www.abbeydaletennisclub.com/media/editor/facilities/facilities-4.jpg"
                    style={{ width: '100%', height: "250px" }}
                />

                {/* </Jumbotron> */}
                <Container>
                    <div className="clearfix" style={{ padding: '.5rem' }}>
                        <h4 className="float-left">Indoor</h4>
                        <a href="/all" className="float-right">View All</a>
                    </div>
                    <Row>
                        {indoor}
                    </Row>
                </Container>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        errorMessage: state.home.errorMessage,
        data: state.home.data
    }


}
export default connect(mapStateToProps, action)(Indoor)
