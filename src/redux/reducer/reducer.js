import * as ActionTypes from '../../consts/actionTypes';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
    viewReducer
});

const viewReducer = (state, action) => {
    consolr.log(action);
};

export default mainReducer;