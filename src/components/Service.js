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
        const { service } = this.props
        const display = service.map((view, i) => {
            return <div key={i}>
                <Container>
                    <Card className="mb-3">
                        <CardImg src="https://ticketnshop.com/cache/images/dc5e5854316643ec98ee0d7a2efa4e39.jpg" alt="name" />
                        <CardBody>
                            <CardText>{this.props.match.params.service}</CardText>
                        </CardBody>
                    </Card>

                    <Card className="mb-3">
                        <CardBody>
                            <h1>Description</h1>
                            <p>{view.description}</p>
                            <h1>Contact Details</h1>
                            <ul>
                                <li>Email: {view.vendor.vendorEmail}</li>
                                <li>Contact: {view.vendor.vendorContact}</li>
                            </ul>
                            <h1>Opening Hours and price</h1>                            
                            <ul>
                                <li>{view.hours.map(hour=><div>{hour.day +' '+ hour.from +' - '+ hour.to}</div>)}</li>                                
                            </ul>
                        </CardBody>
                    </Card>

                    <Card className="mb-3">
                        {view.location}
                        <CardText>Map(Geolocation)</CardText>
                    </Card>

                    <Card className="mb-3">
                        <CardText>Review and Comments</CardText>
                    </Card>
                </Container>
            </div>
        })
        return (
            <div>
                {display}
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
