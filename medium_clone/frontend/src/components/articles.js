import React, { Component } from 'react';

export default class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
	}
	componentDidMount = () =>  {
		fetch("http://localhost:1337/articles")
		.then(res => res.json())
		.then(d => this.setState({
			articles: d
		}))
	}

	render() {
		return(
		<div className= "main-wrapper">
			{
				this.state.articles.map(article => 
					<div className="article-wrapper">
						<h1>{article.title}</h1>
						<h3>{article.description}</h3>
						<span>{article.createdAt}</span>
					</div>)
			}
		</div>
		)
	}
}