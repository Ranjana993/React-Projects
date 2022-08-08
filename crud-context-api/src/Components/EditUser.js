import React from 'react'
import { Link } from 'react-router-dom'

const EditUser = () => {
    return (
        <div className='Add__User'>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Edit User' />
                <div className="edit__btn">
                    <button className='btn1'>Edit User</button>
                    <Link to="/"><button className='btn2'>Cancel </button> </Link> 
                </div>

            </form>
        </div>
    )
}

export default EditUser