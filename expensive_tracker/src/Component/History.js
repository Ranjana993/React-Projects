import React, { useContext } from 'react'
import { GlobalContext } from "../Context/GlobalScope"



const History = () => {
    const { transections, deletTransection} = useContext(GlobalContext)
    return (
        <><div className="history">
            <h2>History</h2>
            {
                transections.map((item )=>{
                    return <ul key={item.id}>
                        <li>{item.text}</li>
                        <li>{item.amount}</li>
                        <li><button onClick={() => deletTransection(item.id)} className='delt-Btn'>X</button></li>
                    </ul>
                })
            }
            

        </div>
        </>
    )
}

export default History