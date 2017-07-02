import React, { Component } from "react";

class Hero extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container-fluid">
				<img src="http://via.placeholder.com/1200x628" className="img-fluid" alt="the great hero" />
				<button className="btn btn-primary">Github</button>
				<button className="btn btn-primary">Linked</button>
				<button className="btn btn-primary">Resume</button>
			</div>
		)
	}
}

export default Hero;