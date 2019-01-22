import * as ActionTypes from '../../consts/actionTypes';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
    viewReducer
});

const viewReducer = (state, action) => {
    console.log(action);
};

export default mainReducer;