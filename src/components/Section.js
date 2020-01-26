import React, { Component } from 'react'
import { Card, CardBody, CardDeck } from 'reactstrap'

class Section extends Component {
    render() {
        return (
            <div>
                <h4>Section</h4>
                <CardDeck>
                        <Card>
                            <img className="card-img-top"
                                src="https://s3.eu-north-1.amazonaws.com/norkring/_articleLandscape/iStock-1149063259.jpg?mtime=20190925151000" />

                            <CardBody>
                                Info
                            </CardBody>
                        </Card>                        
                    </CardDeck>
            </div>
        )
    }
}

export default Section
