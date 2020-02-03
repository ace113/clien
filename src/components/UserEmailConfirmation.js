import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

export class UserEmailConfirmation extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="text-center">
                    <h5>Thank you for signing up</h5>
                    <p className="lead">Confirmation email has been sent to your email.</p>
                </Jumbotron>
            </div>
        )
    }
}

export default UserEmailConfirmation
