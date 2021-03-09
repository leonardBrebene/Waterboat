import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShip, } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div className="header clearfix">
            <div className="header-logo"><FontAwesomeIcon icon={faShip} />WATERBOAT</div>
            <nav className="header-nav">
                <Link className="header-nav-link" to="/">
                    Home
                </Link>
                <Link className="header-nav-link" to="/booking-list">
                    Lista rezervari
                </Link>
                <Link className="header-nav-link" to="/add-booking">
                    Rezerva aici
                </Link>
            </nav>
	  </div>
    );
}

export default Header;
