import ApiUtils from '../libapi/AppApi';
import * as ActionTypes from '../App/AppActionTypes';

let Api = {
    getStarWars: function (someUrl, dispatch) {
        return fetch(someUrl, ApiUtils.addHeaders("testToken"))
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .then(res => dispatch({ type: ActionTypes.GET_DATA_SUCCESS, payload: { dude: res } }))
            .catch(e => dispatch({ type: ActionTypes.GET_DATA_FAILURE, payload: { e: e.response } }));
    }
};

export { Api as default };