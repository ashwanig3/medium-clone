import { articleReducer } from './articleReducer'
import { authReducer } from './authReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({auth: authReducer, article: articleReducer})