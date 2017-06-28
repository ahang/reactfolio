import React, { Component } from "react";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./content/home";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default Main;