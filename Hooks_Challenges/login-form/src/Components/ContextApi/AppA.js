import React, { createContext } from 'react'
import AppB from './AppB'

const Data = createContext()

const AppA = () => {
    return (
        <><Data.Provider value={"This is  From Component A to C"}>
            <AppB/>
        </Data.Provider>

        </>
    )
}

export default AppA
export {Data}