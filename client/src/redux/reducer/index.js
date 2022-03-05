const initialState = {
    userName : []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_USER_NAME":
            return {
                ...state,
                userName: action.payload
            }
        default : return state
    }
}

export default rootReducer