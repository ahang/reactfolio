import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        </ul>
    )
}

export default Header;