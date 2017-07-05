import React, { Component } from "react";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.projects.map((proj) => {
            return (
                <li
                    key={proj.title}
                    className="list-group-item">
                    <p>{proj.title}</p>
                    <p>{proj.url}</p>
                    <p>{proj.objective}</p>
                </li>
            )
        })
    }


    render() {
        console.log(this.props);
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

export default Portfolio;