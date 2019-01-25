import * as ActionTypes from '../../consts/actionTypes';

export const RESET_APP = () => {
    return { type: ActionTypes.RESET_APP };
};
export const OPEN = (params) => {
    return {
        type: ActionTypes.OPEN,
        params,
    };
};
export const SAVE = (obj) => {
    return {
        type: ActionTypes.SAVE,
        obj,
    };
};
export const RESTORE = (id) => {
    return {
        type: ActionTypes.RESTORE,
        id,
    };
};
export const PLAY_CANVAS = () => {
    return { type: ActionTypes.PLAY_CANVAS };
};
