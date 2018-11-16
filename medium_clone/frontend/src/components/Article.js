import React, { Component } from 'react';

export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			body: '',
			claps: 0
		}
	}

	onSubmit = () => {
		fetch("http://localhost:1337/articles", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify(this.state) 
		})
		this.props.history.push('/articles');
	}

	setTitle = (e) => {
		this.setState({
			title: e.target.value
		})
	}

	setDescription = (e) => {
		this.setState({
			description: e.target.value
		})
	}

	setBody = (e) => {
		this.setState({
			body: e.target.value
		})
	}

	render() {
		return(
			<div className="new-article">
				<h2>You are successfully login</h2>
				<h3>Create a new story</h3>
				<input type="text" placeholder="title" onChange={this.setTitle} />
				<input type="text" placeholder="description" onChange={this.setDescription} />
				<textarea rows="7" cols="60" placeholder="body" onChange={this.setBody}></textarea>
				<button className="btn" onClick={this.onSubmit}>submit</button>
			</div>
			)
	}
}