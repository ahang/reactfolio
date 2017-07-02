import React, { Component } from "react";

class Hero extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container-fluid img-container">
				<div className="imgs-container">
				<div className="hero-overlay overlay">
					<button className="hero-btn btn btn-primary">Github</button>
					<button className="hero-btn btn btn-primary">LinkedIn</button>
					<button className="hero-btn btn btn-primary">Resume</button>
				</div>
				</div>
			</div>
		)
	}
}

export default Hero;