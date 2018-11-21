const initState = {
	authError : null,
	userData : {}
};

export const authReducer = (state = initState, action) => {
	switch(action.type) {
		case "LOGIN_SUCCESS" : {
			return {
				userData : action.data,
				authError : null
			}
		}
		case "LOGIN_ERR" : {
			return {
				userData : {},
				authError : action.errData
			}
		}
		case 'LOG_OUT': 
		return {
			...state,
			userData: {}
		}

		default : return state
	}
}
