import * as ActionTypes from "./AppActionTypes";
import Api from '../libservices/AppServices';

export function changeStatus(net) {
    return {
        type: ActionTypes.CHECK_NET,
        payload: { net }
    };
}

export function getStarWarsDude(someUrl) {
    return (dispatch, getState) => {
        Api.getStarWars(someUrl, dispatch);
    }
}