import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postArticle } from './../Actions/action'
import { Redirect } from 'react-router-dom'

class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			body: '',
			claps: 0
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.post(this.state);
		this.props.history.push('/')
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
		const { articles, userData } = this.props;
		console.log(articles)
		if(!userData.jwt) return <Redirect to='/' />
		return(
			<div className="new-article">
				<h1>Create a new story</h1>
				<input type="text" placeholder="Title" onChange={this.setTitle} />
				<input type="text" placeholder="Description" onChange={this.setDescription} />
				<textarea rows="7" cols="60" placeholder="Body" onChange={this.setBody}></textarea>
				<button className="btn" onClick={this.onSubmit}>Ready to publish?</button>
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		articles: state.article.articles,
		userData: state.auth.userData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		post: (data) => dispatch(postArticle(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)