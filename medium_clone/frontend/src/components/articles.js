import React, { Component } from 'react';
import {articleList} from './../Actions/action';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Articles extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount = () =>  {
		this.props.articleList()
	}

	render() {
		const {articles} = this.props;
		return(
			<div className= "main-wrapper">
				{
					articles && articles.map((article,i) => 
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
		articles: state.article.articles[0]
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)