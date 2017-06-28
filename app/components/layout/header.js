import React from "react";

const Header = () => {
    return (
        <div>
            <ul className="nav nav-tabs nav-justified">
                <li role="presentation" className="active"><a href="#"><span className="glyphicon glyphicon-home" aria-hidden="true">Home</span></a></li>
                <li role="presentation"><a href="#">Portfolio</a></li>
                <li role="presentation"><a href="#">About</a></li>
            </ul>
        </div>
    )
}

export default Header;