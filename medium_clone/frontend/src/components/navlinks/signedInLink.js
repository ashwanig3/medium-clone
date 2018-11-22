import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logOut} from './../../Actions/action'
import { searchArticle } from './../../Actions/action'


class SignedInLink extends Component {
	state = {
		searchValue: ''
	}

	handleSearch = (e) => {
		this.setState({
			searchValue: e.target.value
		})
	this.props.searchArticle(this.state.searchValue)
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
	}

	render(props) {
		return (
		<ul className="signedin-link">
			<form onSubmit={this.handleSubmit} className="search-form">
				<i class="fas fa-search search-icon"></i>
				<input type="text" className="search-input" paceholder="search" onChange={this.handleSearch} />
			</form>
			<li><Link to="/article" className="get-started create-btn">create a story</Link></li>
			<li><Link to='/' onClick={
				(e,dispatch) =>{
				e.preventDefault();
				props.dispatch(logOut())
			}
			} >Logout</Link></li>
		</ul>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchArticle: (article) => dispatch(searchArticle(article))
	}
}

export default connect(null, mapDispatchToProps)(SignedInLink)