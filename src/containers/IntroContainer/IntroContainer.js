import React from 'react';
import { Component } from "react";
import './IntroContainer.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SocialLinks from '../../components/SocialLinks';
import MainPhoto from '../../components/MainPhoto';
import { name, subtitle, socialLinks } from "../../constants";

class Intro extends Component {

  render() {

    return (

      <Jumbotron id="intro">

        <div className="bg-filter"></div>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
        <SocialLinks links={socialLinks} />
        <MainPhoto />
        
      </Jumbotron>
    )
  }
}

export default Intro;
