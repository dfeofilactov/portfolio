import * as ActionTypes from '../../consts/actionTypes';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';

import History from '../../components/History';

const initialState = Immutable({
    test: 'Unblock',
    blocked: true,
    container: [],
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RESET_APP]() {
        History.push(`${ History.location.pathname }/test`, {});
        return initialState;
    },
    [ActionTypes.OPEN](state, action) {
        return state.set('test', `reset ${ action.params.name }`).set('blocked', false);
    },
    [ActionTypes.SAVE](state, action) {
        const newObj = {
            viewReducer: {
                test: action.obj.viewReducer.test,
                blocked: action.obj.viewReducer.blocked,
            }
        };
        const newContainer = [ ...state.container, newObj ];
        return state.set('container', newContainer);
    },
    [ActionTypes.RESTORE](state, action) {
        const newState = state.container[action.id];
        return newState;
    },
});

const mainReducer = combineReducers({
    viewReducer
});

export default mainReducer;