const initialState = {articles: []}

export const articleReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'POST_ARTICLE':
		return state;
		case 'POST_UNSUCCESS': 
		return state;
		case 'ARTICLE_LIST':
		return {
			articles: [...state.articles, action.data]
		}
		// case 'CLAPS_INCREMENT': 
		// return {
		// 	articles: [...state.articles, articles[action.articleId].claps++]
		// }
		default: return state;
	}
}