import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

class Resturant extends Component {
    render() {
        return (
            <Jumbotron fluid className="text-center">
                <h1 className="display-3">Resturant</h1>
                <p className="lead">This is the piece of writing that inspired me to make the turn from fiction and corporate research into journalism. It’s the best reframing of American society that I’ve ever read. And kudos to Harper’s for running it. It’s not often you see anarchist anthropologists making highly visible contributions to public discourse.</p>
            </Jumbotron>
        )
    }
}
export default Resturant
