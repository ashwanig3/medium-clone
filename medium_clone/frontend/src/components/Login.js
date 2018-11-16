import React, { Component } from 'react';
import { Link } from "react-router-dom";	

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
				identifier: '',
				password: ''
		}
	}

	setUsername = (e) => {
		this.setState({
			identifier: e.target.value
		})
	}
	setPassword = (e) => {
		this.setState({
			password:e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:1337/auth/local", {
			method:"POST",
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify(this.state)
		}).then(res => res.json()).then(d =>  {
			if(d.statusCode){
				alert("invalid username or password")
			}else{this.props.history.push('/article')}
		})
	}

	render() {
		return (
			<form className="login_form">
				<h1 className="login_heading">LOG IN</h1>
				<input onChange={this.setUsername} className="form_input" type="email" placeholder="enter your username"></input>
				<input onChange={this.setPassword} className="form_input" type="password" placeholder="Password"></input>
				<button className="btn" onClick={this.onSubmit}>Sign In</button>
				<p className="login">Forgot password?</p>
				<span>No account?</span>
				<Link to="/signup">create one</Link>
			</form>
			)
	}
}

export default Login;