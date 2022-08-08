import React, { useState } from 'react'
import "./Container.css"
import CardContainerApi from './CardContainerApi'


const Container = () => {
    const [state, setState] = useState(CardContainerApi)
    return (<>
        <h1>WELCOME TO YOUR STORE ...</h1>
        <div className='cards'>
            {
                state.map((item) => {
                    return <div key={item.id} className="card">
                        <h2>{item.title}</h2>
                        <h4>Price : <span> {item.price}</span></h4>
                        <h4>Rating : <span>⭐</span></h4>
                        <img src={item.url} alt="" />
                    </div>
                })
            }
        </div>
    </>

    )
}

export default Container