import React from 'react';
import { Component } from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from "react-bootstrap/Nav";

class Navbar extends Component {

  constructor(props) {
    super(props);

    var links = props.links ? props.links : [];

    this.state = {
      links: [],
      navOpen: false
    }

    links.forEach(link => {

      const href = link.href ? link.href : '#';
      const title = link.title ? link.title : '';
      const iconClass = link.iconClass ? link.iconClass : '';
      const id = link.id ? link.id : '';

      this.state.links.push(
        <Nav.Link
          href={href}
          title={title}
          key={id}
        >
          <FontAwesomeIcon icon={iconClass} />
        </Nav.Link>
      );

    });

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(e) {
    e.preventDefault();
    console.log('clicked');
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    return (
      <div id="nav-wrapper" className={this.state.navOpen ? 'open' : ''}>
        <div id="nav-btn" onClick={this.toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Nav id="nav" className="flex-column">
          {this.state.links}
        </Nav>
      </div>
    )
  }
}

export default Navbar;
