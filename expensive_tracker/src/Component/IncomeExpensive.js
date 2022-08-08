import React, { useContext } from 'react'
import { GlobalContext } from "../Context/GlobalScope"

const IncomeExpensive = () => {
    const { transections } = useContext(GlobalContext)
    const amount = transections.map(transection => transection.amount)
    const income = amount.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    const expenses = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <>
            <div className="income__expensive">
                <div className="left">
                    <h5>INCOME</h5>
                    <p>${income}</p>
                </div>
                <div className="right">
                    <h5>EXPENSES</h5>
                    <p>-${expenses}</p>
                </div>
            </div>

        </>

    )
}

export default IncomeExpensive