import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return(
			<header>
				<Link to="/" className="main-heading">Medium</Link>
				<div className="top-link">
					<Link to="/article">create a story</Link>
					<Link to="/login">Signin</Link>
					<Link to="/signup" className="get-started">Get started</Link>
				</div>
			</header>
			)
	}
}