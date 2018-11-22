import React, { Component } from "react";
import { Link } from 'react-router-dom';
import  SignedInLink  from './navlinks/signedInLink'
import { SignedOutLink } from './navlinks/SignedOutLink'
import { connect } from 'react-redux'

class Header extends Component {
	render() {
		const { userId } = this.props;
		return(
			<header>
				<Link to="/" className="main-heading">Medium</Link>
				<div className="top-link">
					{
						userId.jwt ? <SignedInLink /> : <SignedOutLink />
					}
				</div>
			</header>
			)
	}
}


const mapStateToProps = (state) => {
	return {
		userId: state.auth.userData
	}
} 

export default connect(mapStateToProps)(Header)