export default (state, action) => {
    if (action.type === "DELETE_TRANSECTION") {
        return ({
            ...state,
            transections: state.transections.filter(item => item.id != action.payload)
        }
        )
    } else if (action.type === "ADD_TRANSECTION") {
        return ({
            ...state,
            transections: [action.payload, ...state.transections]
        })
    }
    else {
        return state
    }
}
// switch (action.type) {
//     case 'DELETE_TRANSECTION':
//         return {
//             ...state,
//             transections: state.transections.filter(item => item.id != action.payload)
//         }
//     default:
//         return state
// }