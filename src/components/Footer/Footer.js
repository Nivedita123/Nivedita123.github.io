import React from 'react';
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import { footerText } from '../../constants';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer" >
                <div className="bg-img" > </div>
                <Container>
                    <Row>
                        <Col className="col pt-5 pb-5 text-center" >
                            {footerText}
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;