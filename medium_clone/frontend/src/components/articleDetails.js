import React from 'react'
import { connect } from 'react-redux'


const ArticleDetails = (props) => {
	const { articles, id } = props;
	console.log(articles)
	let article;
	if(articles) {
		article = articles.filter(article => article.id === id);
		return(
		<div className="article-container">
			<h1>{article[0].title}</h1>
			<div>
				<label>claps:</label>
				<i className="fas fa-hands"></i>
				<span>{article[0].claps}</span>
			</div>
			<h3 className="description">{article[0].description}</h3>
			<p>{article[0].body}</p>
		</div>
		)
	}
	return (
		<div></div>
	)
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
		return {
			articles : state.article.articles,
			id
		}
}


export default connect(mapStateToProps)(ArticleDetails);