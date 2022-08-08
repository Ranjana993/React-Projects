import React, { useReducer } from 'react'
import "./UseReducer.css"
const initialState = 0

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
    return state
}


export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div className="center">
                <h2>{state}</h2>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>dec</button>
            </div>
        </>
    )
}
