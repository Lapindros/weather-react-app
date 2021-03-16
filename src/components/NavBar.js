import React from "react";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar bg-primary justify-content-center">
            <ul className="nav ">
                <li className="nav-item">
                    <Link className="nav-link text-light display-6" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light display-6" to="/time">Time</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light display-6" to="/weather">Weather</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;