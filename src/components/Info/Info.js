import React from 'react';
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Info.css';

class Info extends Component {

  constructor(props) {

    super(props);
    const items = props.bullets ? props.bullets : [];

    this.state = {
      items: [],
      text: props.text ? props.text : ''
    }

    items.forEach(e => {
      this.state.items.push(
        <InfoItems title={e.title} iconClass={e.iconClass} text={e.text} />
      )
    });

  }

  render() {

    return (

      <Row id="personal">
        <Col>
          <Container>
            <h2>About me</h2>
            <p>{this.state.text}</p>
            <Row>
              {this.state.items}
            </Row>
          </Container>
        </Col>
      </Row>

    )
  }
}

class InfoItems extends Component {

  constructor(props) {

    super(props);
    const title = props.title ? props.title : '';
    const iconClass = props.iconClass ? props.iconClass : '';
    const text = props.text ? props.text : '';

    this.state = {
      title: title,
      iconClass: iconClass,
      text: text
    }
  }

  render() {
    return (
      <Col>
        <div class="personal-icon text-center mb-3">
          <span className="hvr-ripple-out" >
            <FontAwesomeIcon icon={this.state.iconClass} />
          </span>
          <h3 class="text-center">{this.state.title}</h3>
          <p class="text-justify">{this.state.text}</p>
        </div>
      </Col>
    )
  }

}

export default Info;
