let ApiUtils = {
    checkStatus: function (response) {
        if (response.ok) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    },
    addHeaders: function (token) {
        return {
            headers: {
                'x-access-token': token
            }
        };
    }
};
export { ApiUtils as default };