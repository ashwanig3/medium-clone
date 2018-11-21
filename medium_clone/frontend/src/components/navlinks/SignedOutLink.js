import React from 'react'
import { Link } from 'react-router-dom'

 export const SignedOutLink = () => {
	return (
		<ul>
			<li><Link to="/login" className="signedin-link">Signin</Link></li>
			<li><Link to="/signup" className="get-started">Get started</Link></li>
		</ul>
		)
}