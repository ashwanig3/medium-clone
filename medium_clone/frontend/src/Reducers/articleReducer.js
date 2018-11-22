const initialState = {articles: [], searchedArticle: []}

export const articleReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'POST_ARTICLE':
		return state;
		case 'POST_UNSUCCESS': 
		return state;
		case 'ARTICLE_LIST': {
			return {
			...state,
			articles: action.data
			}
		}
		case 'SEARCH_ARTICLE': {

			const match= new RegExp(action.value , 'i')
			const filteredArray = state.articles.filter(article => match.test(article.title))
			console.log(filteredArray);
			return {
				...state,
				searchedArticle: filteredArray
			}
		}
			

		// case 'CLAPS_INCREMENT': 
		// return {
		// 	articles: [...state.articles, articles[action.articleId].claps++]
		// }
		default: return state;
	}
}