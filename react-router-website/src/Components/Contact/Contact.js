import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <div className='container'>
            <form action="">
                <div className="form__detail">
                    <h4>Name :</h4>
                    <input type="text" placeholder='Enter Your Name ' />
                </div>
                <div className="form__detail">
                    <h4> Password :</h4>
                    <input type="password" placeholder='Enter Your Password ' />
                </div>
                <div className="form__detail">
                    <h4> Contact Number: </h4>
                    <input type="number" placeholder='Enter Your Contact Number ' />
                </div>
                <button className='form__button'>Submit</button>
            </form>
        </div>
    )
}

export default Contact