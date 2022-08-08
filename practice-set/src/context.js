import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
const initialState = {
    login: "",
    node_id: "",
    avatar_url: "",
    data:[]
}

const ContextApp = createContext()


export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const FetchData = async () => {
        try {
            const data = await fetch("https://api.github.com/users")
            const originalData = await data.json()
            console.log(originalData);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    data: originalData
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData()
    }, [])


    return (
        <ContextApp.Provider value={{ ...state }}>
            {children}
        </ContextApp.Provider>
    )
}

export const useGlobalContext = () => useContext(AppProvider)
