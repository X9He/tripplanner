import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <p className="navbar-header">TRIP PLANNER</p>
                <div className="nav-items-container">
                    <NavLink className="navbar-item" activeClassName="active" to="/plan">PLAN</NavLink>
                    <NavLink className="navbar-item" activeClassName="active" to="/browse">BROWSE</NavLink>
                    <NavLink className="navbar-item" activeClassName="active" to="/account">ACCOUNT</NavLink>
                    <NavLink className="navbar-item" activeClassName="active" to="/savedtrips">SAVED TRIPS</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;
