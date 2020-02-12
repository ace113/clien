import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'

class AfterRegister extends Component {
    render() {
        return (
            <div>
                  <Jumbotron className="text-center">
                    <h5>Thank you for partnering with us.</h5>
                    <p className="lead">An email will be send to your email address after rewiewing your account. Thank you!</p>
                    <br/>
                    <Button className="btn btn-info ml-auto">Home page</Button>
                </Jumbotron>
            </div>
        )
    }
}

export default AfterRegister
