import React from 'react';
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" class="footer" >
                <div class="bg-img" > </div>
                <Container>
                    <Row>
                        <Col className="col pt-5 pb-5 text-center" >
                            Copyright &copy; 2017 <Button variant="link" > Nivedita Gautam </Button>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;