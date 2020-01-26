import React, { Component } from 'react'
import { Jumbotron, Button, Container, } from 'reactstrap'
import Featured from './Featured'
// import Section from './Section'

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="text-center">
                    <h1 className="display-3">APP NAME</h1>
                    <p className="lead">This is the piece of writing that inspired me to make the turn from fiction and corporate research into journalism. It’s the best reframing of American society that I’ve ever read. And kudos to Harper’s for running it. It’s not often you see anarchist anthropologists making highly visible contributions to public discourse.</p>
                    <Button color="info">Learn More</Button>
                </Jumbotron>
                <Container>
                <Featured />
                    {/* <Row>
                        <div className="col-md-9">
                            <Featured />
                        </div>
                        <div className="col-md-2">
                            <Section />
                        </div>
                    </Row> */}
                </Container>
            </div>
        )
    }
}

export default Home
