const initialState = {
    state : {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EXAMPLE":
            return {
                ...state,
                state: action.payload
            }
        default : return state
    }
}

export default rootReducer