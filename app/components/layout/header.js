import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Andy Hang</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto justify-content-center">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;