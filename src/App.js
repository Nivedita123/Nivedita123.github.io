import React from 'react';
import { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import IntroContainer from './containers/IntroContainer';
import Info from './components/Info';
import SkillsContainer from './containers/SkillsContainer';
import ContactContainer from './containers/ContactContainer';
import Footer from './components/Footer';
import { navItems } from './constants';

class App extends Component {
  render() {
    return (
      [
        <Navbar links={navItems} />,
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
