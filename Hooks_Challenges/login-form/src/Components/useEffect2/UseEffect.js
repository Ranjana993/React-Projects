import React, { useState, useEffect } from 'react'
import "./useEffect.css"
export const UseEffect = () => {
    const [state, setState] = useState(window.screen.width)

    const ContentLoaded = () => {
        setState(window.innerWidth)
        // console.log(window.screen.width);
    }

    useEffect(() => {
        window.addEventListener('resize', ContentLoaded);
        

        return () => {
            window.removeEventListener('resize', ContentLoaded);
        }
    }, [])


    return (
        <>
            <p>Scroll the computer screen to see magic..</p>
            <div className='content'>
                {state}
            </div>
        </>
    )
}
