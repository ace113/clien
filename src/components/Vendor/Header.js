import React, { Component } from 'react'


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen: false
        }
    }

    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render() {    
        return (
            <Navbar color="info" dark expand="md" header={this.state.header}>
                <NavbarBrand href='/'>Vendor</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/dashboard">Dashboard</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Signup</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        )
    }
}

export default Header
