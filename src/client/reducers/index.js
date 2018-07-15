import {combineReducers} from 'redux';

import usersReducers from './usersReducres';

export default combineReducers({
    users : usersReducers
});