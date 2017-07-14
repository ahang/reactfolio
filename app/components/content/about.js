import React, { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <img src="assets/img/profile.jpg" alt="me" className="profile-img mx-auto d-block img-thumbnail rounded-circle" />
                    </div>
                    <div className="col-md-9">
                        <p>Hello! I am currently a student at Northwestern Coding Bootcamp, learning how to become a Web Developer. Over the last six months, I have learned HTML, CSS, Javascript, jQuery, Node, Express, SQL and NoSQL DB, Handlebars, ReactJS. I currently work full time as a quality assurance engineer for a bankruptcy software company and will be transitioning to Web Application Developer fulltime towards the end of July. I am a very detailed-oriented person and a problem solver who is looking to switch careers and focus fully on development!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;