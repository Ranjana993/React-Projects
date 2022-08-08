import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"


const initialState = {
    transections: [
        
    ]
}



export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    function deletTransection(id) {
        dispatch({
            type: 'DELETE_TRANSECTION',
            payload: id
        })
    }
    function AddTransection(transections) {
        dispatch({
            type: 'ADD_TRANSECTION',
            payload: transections
        })
    }

    return (
        <GlobalContext.Provider value={{ transections: state.transections, deletTransection, AddTransection}}>
            {children}
        </GlobalContext.Provider>)
}




