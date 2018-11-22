import React, { Component } from 'react';
import {articleList} from './../Actions/action';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Articles extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount = () =>  {
		this.props.articleList()
	}

	render() {
		const {articles, seareched } = this.props;
		let displayArticle;
		console.log(seareched)
		if(seareched.length > 0) {
			displayArticle = seareched;
		} else {
			displayArticle =  articles
		}

		return(
			<div className= "main-wrapper">
				{
					displayArticle && displayArticle.map((article,i) => 
						(<div className="article-wrapper" key={i}>
													<Link to={`/details/${article.id}`} className="article-title">{article.title}</Link>
													<h3>{article.description}</h3>
													<span className="article-created">{article.createdAt}</span>
												</div>))
				}
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		articleList: (data) => dispatch(articleList(data))
	}
}

const mapStateToProps = (state) => {
	return {
		articles: state.article.articles,
		seareched: state.article.searchedArticle
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)