import React from 'react'
import { useContext } from 'react'
import { Data } from './AppA'

export const AppC = () => {
    const data = useContext(Data)
    return (
        <>
            <h2>This is Components {data}</h2>
        </>
    )
}
