import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className="footer">
                <div className="container text-center">
                        <h4>Let's Connect</h4>
                        <a href="http://www.github.com/ahang" className="btn btn-social-icon btn-github" target="_blank"><span className="fa fa-github"></span></a>
                        <a href="https://www.linkedin.com/in/andy-hang-492057102/" className="btn btn-social-icon btn-linkedin" target="_blank"><span className="fa fa-linkedin"></span></a>
                        <a href="http://www.twitter.com/ahang_/" className="btn btn-social-icon btn-twitter" target="_blank"><span className="fa fa-twitter"></span></a>
                        <h4>Developed by me using React © 2017</h4>
                </div>
            </footer>
        )
    }
}

export default Footer;