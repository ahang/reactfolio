import React, { Component } from "react";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./content/home";
import About from "./content/about"

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>
                <div>
                    <Home />
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Main;