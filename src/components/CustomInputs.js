import React, { Component } from 'react'
import { FormGroup, Input } from 'reactstrap'

class CustomInputs extends Component {
    render() {
        const {input: {value, onChange } } = this.props;
        return (
            <div>
                <FormGroup>
                    <Input 
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    className="form-control"
                    type={ this.props.type }
                    value={ value }
                    onChange={ onChange }                   
                    />                
                </FormGroup>
            </div>
        )
    }
}

export default CustomInputs
