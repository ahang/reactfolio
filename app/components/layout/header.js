import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row-fluid">
                <div className="col-md-12">
                    <nav className="navbar navbar-default">
                            <div className="navbar-header">
                                <Link to="/" className="navbar-brand">
                                    <img alt="Andy" src="" />
                                </Link>
                            </div>
                            <ul className="nav nav-pills navbar-text navbar-right">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;