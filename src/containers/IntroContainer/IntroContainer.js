import React from 'react';
import { Component } from "react";
import './IntroContainer.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Intro extends Component {
  render() {
    return (
      <Jumbotron id="intro">
        <div class="bg-filter"></div>
        <h1>Nivedita Gautam</h1>
        <h2>"Awesome" Full Stack Developer</h2>
      </Jumbotron>
    )
  }
}

export default Intro;
