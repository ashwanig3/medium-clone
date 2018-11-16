//for login action
	export function loggedIn(userName, password) {
		return {
			type: "LOG_IN",
			userName,
			password
		}
	}

//for signup action

export function signup(userName, email, password) {
	return {
		type: "SIGN_UP",
		email,
		userName,
		password
	}
}
//for post the article
 export function postArticle(title,description,body) {
 	return {
 		type: "POST_ARTICLE",
 		title,
 		description,
 		body
 	}
 }