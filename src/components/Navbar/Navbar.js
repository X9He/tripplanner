import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav-items-container">
                    <NavLink className="navbar-item" activeClassName="active" to="/plan">Plan</NavLink>
                    <NavLink className="navbar-item" activeClassName="active" to="/browse">Browse</NavLink>
                    <NavLink className="navbar-item" activeClassName="active" to="/account">Account</NavLink>
                    <NavLink className="navbar-item" activeClassName="active" to="/savedtrips">Saved Trips</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;
