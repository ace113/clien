import React, { Component } from 'react'
import {
    // Jumbotron,
    Card,
    CardImg,
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
import { MdPlace } from 'react-icons/md'




class Indoor extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.componentDidMount = this.componentDidMount.bind(this)

    }


    componentDidMount() {
        this.props.getcatagory(this.props.match.params.catagory);               
    }

    render() {

        const { data } = this.props
      
        const indoor = data.map((view, i) => {
            return <Card style={{ width: '16rem' }} key={i} className="ml-4 mb-4 text-center shadow">
                <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/0/06/Futebol_Salao_Pan2007.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{view.serviceName}</CardTitle>
                    <CardText key={i}>
                        <MdPlace /> <small>{view.location}</small>
                         {view.type.catagory.catagoryName}
                    </CardText>
                    <div>
                        <Button color="info mb-2">Book Now</Button>
                    </div>
                    <div>
                        <a href={this.props.match.params.catagory+'/'+view.serviceName} className="btn btn-primary">View Details</a>
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
                    alt=""   
                
                />

                {/* </Jumbotron> */}
                <Container>
                    <div className="clearfix" style={{ padding: '.5rem' }}>
                        <h4 className="float-left">{this.props.match.params.catagory}</h4>
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
