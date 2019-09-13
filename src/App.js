import React from 'react';
import { Component } from "react";
import './App.css';
import Nav from './components/Nav';
import IntroContainer from './containers/IntroContainer';
import Info from './components/Info';
import SkillsContainer from './containers/SkillsContainer';
import ContactContainer from './containers/ContactContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      [
        <Nav />,
        <IntroContainer />,
        <Info />,
        <SkillsContainer />,
        <ContactContainer />,
        <Footer />
      ]
    )
  }
}

export default App;
