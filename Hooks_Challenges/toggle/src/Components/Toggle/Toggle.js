import React, { useState } from 'react'
import "./toggle.css"



export const Toggle = () => {
    const [name, setName] = useState("My name is Ranjana Yadav")

    const changeName = () => {
        (name === "My name is Ranjana Yadav") ?
            setName("Im going to market") :
            setName("My name is Ranjana Yadav")

    }
    return (
        <><div className="center">
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
            
        </>
    )
}
