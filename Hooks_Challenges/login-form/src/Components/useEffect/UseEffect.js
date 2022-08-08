import React, { useEffect, useState } from 'react'
import 'C:/Users/admin/Desktop/React/Hooks_Challenges/login-form/src/App.css';
export const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count >= 1) {
            document.title = `Count ${count}`
        } else {
            document.title = `Count`
        }

    }, [count])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count+1)}>Click to See magic</button>
        </div>
    )
}
