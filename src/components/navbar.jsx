import React, { Component } from 'react';
import "./navbar.css";

class navbar extends React.Component {

    render() { 
        return <div className="navbar">
            <div className="topNavbar">
                <div className="capitalText"> John's summer blog </div>
            </div>
            <div className="lowerNavbar">
                <button onClick={() => this.props.onPageRequested("Home")} className="navlink"> HOME </button>
                <button onClick={() => this.props.onPageRequested("About")} className="navlink"> Who am I? </button>
                <button onClick={() => this.props.onPageRequested("Article")} className="navlink"> Blog articles </button>
                <button onClick={() => this.props.onPageRequested("Contact")} className="navlink"> Contact </button>
            </div>
        </div>;
    }
}
 
export default navbar;