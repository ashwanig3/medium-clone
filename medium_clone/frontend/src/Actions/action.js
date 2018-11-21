//for login action

	export function loggedIn(userData) {
		return (dispatch) => {
			fetch("http://localhost:1337/auth/local", {
			method:"POST",
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify({
				identifier : userData.identifier,
				password : userData.password
			})
		}).then(res => {
			if(res.ok) {
				res.json()
				.then((res) => {
					dispatch({ type: 'LOGIN_SUCCESS', data: res})
				})
			} else {
				res.json()
				.then((res) => {
					dispatch({ type: 'LOGIN_ERR', errData: res})
				})
			}
		}

		)}
		
	}

//for signup action

export function signUp(userDetails) {
	return (dispatch) => {
		fetch("http://localhost:1337/users", {
			method:"POST",
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify({
				username: userDetails.username,
				email: userDetails.email,
				password: userDetails.password
			})
		}).then(res => {
			if(res.ok ) 
				{
				res.json()
				.then((res) => {
					alert('signup successful')
					dispatch({ type: 'SIGNUP_SUCCESS' })
					})
				}
			}) 
	}
}
//for post the article
 export function postArticle(articleDetails) {
 	return (dispatch) => {
 		fetch("http://localhost:1337/articles", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept" : "application/json"
			},
			body: JSON.stringify({
				title: articleDetails.title,
				description: articleDetails.description,
				body:articleDetails.body,
				claps: articleDetails.claps
			}) 
		}).then(res => { 
			if(res.ok ) {
				alert('Published')
				res.json()
				.then((res) => {
					dispatch({ type: 'POST_ARTICLE', articleDetails:res })
					})
				} else {
				res.json()
				.then((res) => {
					dispatch({ type: 'POST_UNSUCCESS', errData: res})
				})
			}
			})
 	}
 }

 //for logout action 

 export function logOut() {
 	return{
 		type: 'LOG_OUT'
 	}
 }

// for displaying artice list

export function articleList() {
	return (dispatch) => {
		fetch("http://localhost:1337/articles")
		.then(res => { 
			if(res.ok ) {
				res.json()
				.then((res) => {
					dispatch({ type: 'ARTICLE_LIST', data: res })
					})
				} else {
				res.json()
				.then((res) => {
					dispatch({ type: 'FETCH_ERROR', errData: res})
				})
			}
			})
	}
}

//for claps Increament

export function clapsIncrement(noOfClaps) {
	return {
		type: 'CLAPS_INCREMENT',
		noOfClaps
	}
}