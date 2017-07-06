import React, { Component } from "react";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.projects.map((proj) => {
            return (
                <div className="card" key={proj.title}>
                    <img className="card-img-top" src={proj.img} alt={`Image of ${proj.title}`}/>
                    <div className="card-block">
                        <h4 className="card-title">{proj.title}</h4>
                        <p className="card-text">The goal of this app is {proj.objective}</p>
                        <h6>Technologies Used</h6>
                        <ul>
                            {proj.technologies.map((tech) => <li key={tech}>{tech}</li> )}
                        </ul>
                    </div>
                    <div className="card-footer">
                        <a href={proj.url} className="card-link">Check it out live</a>
                        <a href={proj.github} className="card-link">Check out the Repository</a>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="card-group">
                {this.renderList()}
            </div>
        )
    }
}

export default Portfolio;