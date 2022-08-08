export const reducer = (state, action) => {
    switch (action.type) {
        case action.type === "GET_STORIES":
            return {
                ...state,
                data:action.payload.data
            }

        default:
            break;
    }

    return state
}