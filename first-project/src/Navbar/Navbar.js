import React from 'react'
// import Todo from "./Todo.jpg"

function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav-doc'>
                <img src="./Todo.jpg" alt='logo' />
                <h2>ReactFacts</h2>
            </div>
            <div className='title'>
                <ul>
                    <li>React-Course -Project 1</li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar