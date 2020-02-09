import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarText
} from 'reactstrap'
import { connect } from 'react-redux'
import * as action from '../../actions/user.actions'
import { GiFootyField } from 'react-icons/gi'
import { FaDumbbell } from 'react-icons/fa'
import { FaPlaceOfWorship } from 'react-icons/fa'
import { IoIosRestaurant } from 'react-icons/io'
import { GoBell } from 'react-icons/go'
import { IoMdMail } from 'react-icons/io'
import Avatar from 'react-avatar';


class TopNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            // dropdownOpen: false
        }

        this.handleOnClick = this.handleOnClick.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidMount(){
        this.props.getCatagory()
    }

    // dropToggle = () => {
    //     this.setState({
    //         dropdownOpen: !this.state.dropdownOpen
    //     })
    // }

    handleOnClick() {
        this.props.signout()
    }

    render() {

        const { catagory } = this.props

        const catagorylist = catagory.map((cata, key)=>{
            return  <NavItem className="ml-2 mr-2" key={cata._id}>
            <NavLink href={cata.catagoryName}>{cata.catagoryName}</NavLink>
        </NavItem>
        } 
        )
        
        return (
            <div>
                <Navbar color="info" dark expand="md" header={this.state.header} className="shadow-lg navbar sticky-top">
                <NavbarBrand href='/' className="ml-2 mr-3">Company Logo</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" pills navbar>
                        {catagorylist}
                        {/* <NavItem className="ml-2 mr-2">
                            <NavLink href="/indoor"><GiFootyField size={30} /> Indoor</NavLink>
                        </NavItem>
                        <NavItem className="ml-2 mr-2">
                            <NavLink href="/gym"><FaDumbbell size={30} /> Gym</NavLink>
                        </NavItem>
                        <NavItem className="ml-2 mr-2">
                            <NavLink href="/venue"><FaPlaceOfWorship size={30} /> Venue</NavLink>
                        </NavItem>
                        <NavItem className="ml-2 mr-2">
                            <NavLink href="/resturant"><IoIosRestaurant size={30} /> Resturant</NavLink>
                        </NavItem> */}
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        {!this.props.isAuth ?

                            [
                                <NavItem>
                                    <NavLink href="/user/login">SignIn</NavLink>
                                </NavItem>,
                                <NavItem>
                                    <NavLink href="/vendor/register">Become a Partner</NavLink>
                                </NavItem>] : null

                        }
                        {this.props.isAuth ?
                            [
                                <NavItem className="ml-2 mr-2">
                                    <IoMdMail color="white" size={20} />
                                </NavItem>,
                                <NavItem className="ml-2 mr-2">
                                    <GoBell color="white" size={20} />
                                </NavItem>,                                
                                <NavItem className="ml-2 mr-4">
                                    <UncontrolledDropdown>
                                        <DropdownToggle tag="a">
                                            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="Prajwal Maharjan" size="30" round={true} />
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem><a href="/user/dashboard" className="text-decoration-none text-reset">Dashboard</a></DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>My Bookings</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem onClick={this.handleOnClick}>Log Out</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                            ] : null
                        }
                    </Nav>                   
                </Collapse>               
            </Navbar>            
            </div>            
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.user.isAuthenticated,
        catagory: state.catagory.catagory
    }
}
export default connect(mapStateToProps, action)(TopNav)
