import React from 'react';
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import nive from "./nive.jpg";

import './MainPhoto.css';

class MainPhoto extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Image src={nive} roundedCircle className = "mainImg"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainPhoto;