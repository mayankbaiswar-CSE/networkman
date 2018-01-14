import * as ActionTypes from "./AppActionTypes";
import { mapCharacter } from './AppViewToMapper';

const initailState = {
    net: false,
    star: {},
    error: null
};

function AppReducer(state = initailState, action = {}) {
    switch (action.type) {
        case ActionTypes.CHECK_NET:
            return { ...state, net: action.payload.net };
        case ActionTypes.GET_DATA_SUCCESS:
            return { ...state, star: mapCharacter(action.payload.dude) };
        case ActionTypes.GET_DATA_FAILURE:
            return { ...state, error: action.payload.e };
        default:
            return state;
    }
}

export default AppReducer;