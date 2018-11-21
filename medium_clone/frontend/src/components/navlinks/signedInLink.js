import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logOut} from './../../Actions/action'

const SignedInLink = (props) => {
	return (
		<ul className="signedin-link">
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

export default connect()(SignedInLink)