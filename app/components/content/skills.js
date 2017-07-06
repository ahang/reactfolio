import React, { Component } from "react";

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container skills-container">
                <h1 className="skills-header text-center">Skills</h1>
                <div className="row-fluid skills-row card-deck">
                    <div className="skills-box col-sm-4 card">
                        <div className="card-block">
                            <h4 className="text-center card-title">Front-End</h4>
                            <hr />
                            <ul className="card-text">
                                <li><b>Knowledgeable</b></li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Handlebars</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-box col-sm-4 card">
                        <div className="card-block">
                                <h4 className="card-title text-center">Back-End</h4>
                            <hr />
                            <ul className="card-text">
                                <li><b>Knowledgeable</b></li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                                <li>Sequelize</li>
                                <li>Mongoose</li>
                                <hr />
                                <li><b>Working Knowledge</b></li>
                                <li>Python</li>
                                <li>Flask</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-box col-sm-4 card">
                        <div className="card-block">
                        <h4 className="text-center card-title">Other</h4>
                        <hr />
                        <ul>
                            <li><b>Methodologies</b></li>
                            <li>MVC Architecture</li>
                            <li>Agile</li>
                            <li>Waterfall</li>
                            <hr/>
                            <li><b>Weapons of Choice</b></li>
                            <li>Git</li>
                            <li>Postman</li>
                            <li>Heroku Deployment</li>
                            <li>Github Pages</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;