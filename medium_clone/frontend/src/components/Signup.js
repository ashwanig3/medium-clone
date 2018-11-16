import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		}
	}
	setEmailValue = (e) => {
		this.setState({
			email: e.target.value
		})
	}

	setUsername = (e) => {
		this.setState({
			username:e.target.value
		})
	}
	setPassword = (e) => {
		this.setState({
			password: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:1337/users", {
			method:"POST",
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify(this.state)
		}).then(res => {
			if(res.ok ) 
				{
					alert("SingUp Success"); 
					this.props.history.push('/login')
				} else {
					alert("Unable to Signup")
				}
		})
	}
	 	render() {
		return (
			<form className="signup_form">
				<h1 className="heading">Signup</h1>
				<input className="form_input" type="email"  placeholder="Email" onChange={this.setEmailValue}/>
				<input className="form_input" type="text"  placeholder="Username" onChange={this.setUsername}/>
				<input className="form_input" type="password" placeholder="Password" onChange={this.setPassword}/>
				<button className="btn" onClick={this.onSubmit}>Sign up</button>
				<p>have account?</p>
				<Link to="/login">Login</Link>
			</form>
			)
	}
}
export default Signup;