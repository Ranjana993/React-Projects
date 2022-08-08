import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalScope'

const Balance = () => {

    const { transections } = useContext(GlobalContext)
    const amount = transections.map(transection => transection.amount)
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <>
            <div className='balance'>
                <h3>YOUR BALANCE </h3>
                <h2>${total}</h2>
            </div>
        </>
    )
}

export default Balance