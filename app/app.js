import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

//Layout Components
import Header from "./components/layout/header";
import Footer from "./components/layout/footer"

//Main Content Components
import Home from "./components/home";
import Portfolio from "./components/content/portfolio";
import About from "./components/content/about";

import Projects from "./components/content/data/projects.json"

const App = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Header />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" render={ (props) => (
                        <Portfolio {...props} projects={Projects} />
                    )} />
                    <Route exact path="/" component={Home} />
                <Footer />
            </div>
        </HashRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);