import React, { useState, useContext } from 'react'
import { GlobalContext } from "../Context/GlobalScope"

function NewTransection() {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const { AddTransection } = useContext(GlobalContext)

    const SubmitFomr = (e) => {
        e.preventDefault()
        const newTransection = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount:+amount
        }
        AddTransection(newTransection)
    }
    return (
        <>
            <div className="newTransection">
                <h2>Add New Transection</h2>
                <form action="" onSubmit={SubmitFomr}>
                    <div className='first'>
                        <label htmlFor="Text">Text</label>
                        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter Text...' />
                    </div>
                    <div className='first second'>
                        <label htmlFor="Amount">Amount</label>
                        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" placeholder='0' />
                    </div>
                    <button type="submit">Add transaction</button>
                </form>
            </div>
        </>
    )
}

export default NewTransection