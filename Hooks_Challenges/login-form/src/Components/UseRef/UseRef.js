import React, { useRef, useState } from 'react'
import "./UseRef.css"

export const UseRef = () => {
    const [show, setShow] = useState(false)
    const name = useRef(null)

    const submitForm = (e) => {
        e.preventDefault()
        const data = name.current.value
        data === "" ? alert("Plz Fill the data") : setShow(true)
        name()
    }
    return (
        <>
            <div className="container">
                <form action="" onSubmit={submitForm}>
                    <div className="center">
                        <h2>Enter Your Luckey Name ...</h2>
                        <input
                            type="text"
                            id='name'
                            ref={name}
                            autoComplete='off'
                        />
                        <button>Submit</button>
                    </div>
                </form>
                <h1>
                {
                    show ? `Your Luckey Name Is ${name.current.value}` : ""
                }
                </h1>
            </div>


        </>
    )
}
