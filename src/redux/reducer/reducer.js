import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../consts/actionTypes';
import NCanvas from '../../canvas';

const initialState = Immutable({
    test: 'Unblock',
    blocked: true,
    container: [],
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RESET_APP]() {
        return initialState;
    },
    [ActionTypes.OPEN](state) {
        console.log('open'); NCanvas.Init();
        NCanvas.Init();
        return state;
    },
    [ActionTypes.SAVE](state, action) {
        const newObj = {
            viewReducer: {
                test: action.obj.viewReducer.test,
                blocked: action.obj.viewReducer.blocked,
            },
        };
        const newContainer = [...state.container, newObj];
        return state.set('container', newContainer);
    },
    [ActionTypes.RESTORE](state, action) {
        const newState = state.container[action.id];
        return newState.viewReducer;
    },
    [ActionTypes.PLAY_CANVAS](state) {
        NCanvas.Play();
        return state;
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
