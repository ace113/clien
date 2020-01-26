import React, { Component } from 'react'
import { Card, CardBody, CardDeck } from 'reactstrap'

class Featured extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4 className="bd-callout">Featured</h4>
                    <a href="/" className="view_all">View All</a>
                </div>
                <div >
                    <CardDeck>
                        <Card>
                            <img alt="" className="card-img-top"
                                src="https://s3.eu-north-1.amazonaws.com/norkring/_articleLandscape/iStock-1149063259.jpg?mtime=20190925151000" />

                            <CardBody>
                                Info
                            </CardBody>
                        </Card>
                        <Card>
                            <img alt="" className="card-img-top"
                                src="https://s3.eu-north-1.amazonaws.com/norkring/_articleLandscape/iStock-1149063259.jpg?mtime=20190925151000" />

                            <CardBody>
                                Info
                            </CardBody>
                        </Card>
                    </CardDeck>
                    <CardDeck className="mt-2">
                        <Card>
                            <img alt="" className="card-img-top"
                                src="https://s3.eu-north-1.amazonaws.com/norkring/_articleLandscape/iStock-1149063259.jpg?mtime=20190925151000" />

                            <CardBody>
                                Info
                            </CardBody>
                        </Card>
                        <Card>
                            <img alt="" className="card-img-top"
                                src="https://s3.eu-north-1.amazonaws.com/norkring/_articleLandscape/iStock-1149063259.jpg?mtime=20190925151000" />

                            <CardBody>
                                Info
                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default Featured
