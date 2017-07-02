import React, { Component } from "react";

import Hero from "./content/hero"
import Skills from "./content/skills"

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Hero />
                <Skills />
            </div>
        )
    }
}

export default Home;