import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";


export const AppContext = createContext()
const API = "http://www.omdbapi.com/?apikey=a25ea6b0"



export const AppProvider = ({ children }) => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ show: false, msg: "" })
    const [query, setQuery] = useState("titanic")

    const getData = async (url) => {
        try {
            const data = await fetch(url)
            const actualData = await data.json()
            // console.log(actualData);
            if (actualData.Response === "True") {
                setMovie(actualData.Search);
                setLoading(false)
            }
            else {
                setError({
                    show: true,
                    msg: actualData.error
                })
            }
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getData(`${API}&s=${query}`)
    }, [query])


    return (
        <AppContext.Provider value={{ movie, loading, error,query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}



// Custom Hook

export const useGlobalHook = () => useContext(AppContext)
