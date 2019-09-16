import React from 'react';
import { Component } from "react";
import './SocialLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialLinks extends Component {

    constructor(props) {

        super(props);

        const links = props.links ? props.links : [];

        this.state = {
            socialLinks: []
        }

        links.forEach(item => {
            this.state.socialLinks.push(
                <SocialLink title={item.title} href={item.href} iconClass={item.iconClass} />
            )
        });
    }

    render() {
        return (
            <div className="social-link">
                {this.state.socialLinks}
            </div>
        )
    }
}

class SocialLink extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title: props.title ? props.title : '',
            href: props.href ? props.href : '',
            iconClass: props.iconClass ? props.iconClass : '',
        }

    }
    render() {
        return (
            <a
                className="hvr-ripple-out"
                target="_blank"
                rel="noopener noreferrer"
                title={this.state.title}
                href={this.state.href}>
                <FontAwesomeIcon icon={this.state.iconClass} />
            </a>
        )
    }
}

export default SocialLinks;
