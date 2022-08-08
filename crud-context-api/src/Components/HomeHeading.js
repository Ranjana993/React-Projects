import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeading = () => {
    return (
        <>
            <din className="container">
                <span> My Team </span>
                <Link to='/adduser' className='home__btn'> Add user</Link>
            </din>
        </>
    )
}

export default HomeHeading