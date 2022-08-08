import React from 'react'
import {Link} from "react-router-dom"
const AddUser = () => {
    return (
        <div className='Add__User'>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter User Name' />
                <div className="btn">
                    <button className='btn1'>Submit</button>
                    <Link to='/' className='btn2'> Cancel</Link>
                </div>
                
            </form>
        </div>
    )
}

export default AddUser