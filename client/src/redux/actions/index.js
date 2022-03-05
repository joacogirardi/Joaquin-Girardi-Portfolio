

export function setNewUser(name) {
    return function (dispatch) {
        try {
            return dispatch({
                type: "NEW_USER_NAME",
                payload: name
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}