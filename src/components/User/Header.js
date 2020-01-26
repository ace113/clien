import React, { Component } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar color="info" dark expand="md" header={this.state.header}>
                <NavbarBrand href='/'>Company Logo</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/indoor">Indoor</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/gym">Gym</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/venue">Venue</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/resturant">Resturant</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">SignIn</NavLink>
                        </NavItem>
                        {/* <NavbarText>
                            |
                        </NavbarText> */}
                        <NavItem>
                            <NavLink href="/">Become a Partner</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header
