import {createStore, compse } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import the route reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create and object from the default data
const defaultState = {
    posts: posts,
    comments: comments
};

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export const history = syncHistoryWithStore(browserHistory, store);

export default store;