import React, { Component } from 'react'
import { Container, Card, CardImg, CardBody, CardText } from 'reactstrap'
import { connect } from 'react-redux'
import * as action from '../actions/service.actions'


export class Service extends Component {

    constructor(props) {
        super(props)

        this.state = {         
        }
        this.componentDidMount = this.componentDidMount.bind(this)

    }

    componentDidMount() {
        this.props.getservice(this.props.match.params.service);
    }

    render() {   
        const {service} = this.props
        return (
            <div>
                <Container>
                    <Card className="mb-3">
                        <CardImg src="https://ticketnshop.com/cache/images/dc5e5854316643ec98ee0d7a2efa4e39.jpg" alt="name" />
                        <CardBody>
                            <CardText>{this.props.match.params.service}</CardText>
                        </CardBody>
                    </Card>

                    <Card className="mb-3">
                        <h1>Description</h1>
                        {service.location}                                            
                        <h1>Contact Details</h1>
                        {/* {service.type._id} */}
                        <h1>Opening Hours and price</h1>
                    </Card>

                    <Card className="mb-3">
                        <CardText><h1>Map(Geolocation)</h1></CardText>
                    </Card>

                    <Card className="mb-3">
                        <CardText><h1>Review and Comments</h1></CardText>
                    </Card>
                </Container>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        errorMessage: state.service.errorMessage,
        service: state.service.service
    }


}

export default connect(mapStateToProps, action)(Service)
