import React, { Component } from 'react'
import {
    Row,
    Col
} from 'reactstrap'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'


class Footer extends Component {
    render() {
        return (
            <div className="bg-info text-light pl-5 pr-5 pt-5 mt-2">
                <Row className="mb-4">
                    <Col md={3}>
                        <ul>
                            <li><h2>Logo</h2></li>
                            <br />
                            <li>company@mail.com</li>
                            <li>www.company.com</li>
                            <li>Address line 1</li>
                            <li>+977-555555555</li>
                            <br />
                            <li>
                                <FaTwitter size={20} className="mr-2" />
                                <FaFacebookF size={20} className="ml-2 mr-2" />
                                <FaInstagram size={20} className="ml-2 mr-2" />
                                <FaLinkedinIn size={20} className="ml-2 mr-2" />
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <li><h6>SITE MAP</h6></li>
                            <li>Indoor</li>
                            <li>Gym</li>
                            <li>Venue</li>
                            <li>Resturant</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <li><h6>GET HELP</h6></li>
                            <li>FAQ's</li>
                            <li>Sales Terms</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <li><h6>PAYMENT OPTIONS</h6></li>
                            <li>
                                <img
                                    src="https://1.bp.blogspot.com/-cOpncwOZ2sM/VdbAtf3pxlI/AAAAAAAAAKE/FX2nWmG1ZWo/s1600/esewa.png"
                                    alt="esewa"
                                    style={{ width: '80px' }}
                                />
                            </li>
                            <li></li>
                            <li>
                                <img
                                    src="https://blog.khalti.com/wp-content/uploads/2019/09/khalti-logo.png"
                                    alt="esewa"
                                    style={{ width: '80px' }}
                                />
                            </li>
                        </ul>
                        <br />
                        <ul>
                            <li><h6>COMPANY</h6></li>
                            <li>Contact Us</li>
                            <li>About Us</li>
                        </ul>
                    </Col>

                </Row>
                <hr />
                <Row>
                    <Col md={6}>
                        <p>Copyright Company Name © {(new Date().getFullYear())}. All rights reserved.</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer
