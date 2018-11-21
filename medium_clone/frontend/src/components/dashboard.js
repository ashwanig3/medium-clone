import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Articles from './articles';

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	const { userId } = this.props;
        if(!userId.jwt) return <Redirect to='/login' />
        return (
           <Articles />
        );
    }
}

const mapStateToProps = (state) => {
	return {
		userId: state.auth.userData
	}
}

export default connect(mapStateToProps)(DashBoard);
