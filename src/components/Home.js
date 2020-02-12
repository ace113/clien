import React, { Component } from 'react'
import {
    // Jumbotron,
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
import Carousel from './Carousel'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // data: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)

    }

    componentDidMount() {
        this.props.getdata();

    }



    render() {
        const { data } = this.props

        const serviceList = data.map((view, key) => {
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
                        <a href={'component/'+view.type.catagory.catagoryName+'/'+view.serviceName} className="btn btn-primary">View Details</a>
                    </div>                   
                </CardBody>
            </Card>
        })

        return (
            <div>
                {/* <Jumbotron>
                    <h1>This is home page</h1>
                </Jumbotron> */}
               
                <Carousel />
                
                
                <Container>
                    <div className="clearfix" style={{ padding: '.5rem' }}>
                        <h4 className="float-left">Featured</h4>
                        <a href="/all" className="float-right">View All</a>
                    </div>
                    <Row>
                        {serviceList}
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

export default connect(mapStateToProps, action)(Home)
