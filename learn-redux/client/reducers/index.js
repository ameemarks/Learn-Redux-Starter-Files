import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// there are 3 thing living in the state: posts, comments, routing - all the changes made by user
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;