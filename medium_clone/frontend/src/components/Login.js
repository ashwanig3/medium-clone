import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { loggedIn } from './../Actions/action'
import { connect } from 'react-redux'	
import {Redirect} from 'react-router-dom'


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
		this.props.signIn(this.state);
	}

	render() {
		const {userData} = this.props;

			if(userData.jwt) return <Redirect to='/' />
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

const mapDispatchToProps = (dispatch) => {
	return {
		signIn : (d) => dispatch(loggedIn(d))
	}
}

function mapStateToProps(state) {
	return {
		userData : state.auth.userData
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);