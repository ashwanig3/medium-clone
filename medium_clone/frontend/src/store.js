import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(rootReducer, composeEnhancer(
	applyMiddleware(thunk)
));
export default store;