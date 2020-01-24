import React, { Component } from 'react'

class PageNotFound extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             header: false
        }
    }
    
    render() {
        return (
            <div className="text-center mt-5">
                <div>
                    <h1 style={{fontSize: '200px'}}>404</h1>
                </div>
                <h1>We are sorry, Page not found!</h1>
                <p className="lead">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a href="/" className="btn btn-info"><h6 className="my-auto p-2">Back To Homepage</h6></a>
            </div >
        )
    }
}

export default PageNotFound
