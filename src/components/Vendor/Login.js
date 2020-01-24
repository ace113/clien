import React, { Component } from 'react'
import {
    Container,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap'

class Login extends Component {
    render() {
        return (
           <Form>
               <FormGroup>
                   <Label>Username</Label>
                   <Input type="email" name="email" placeholder="Enter your email" />
               </FormGroup>
               <FormGroup>
                   <Label>Username</Label>
                   <Input type="email" name="email" placeholder="Enter your email" />
               </FormGroup>
           </Form>
        )
    }
}

export default Login
