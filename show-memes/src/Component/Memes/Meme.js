import React from 'react'

const Main = () => {
    return (
        <>
        <div className='container'>
                <form action="" className='form'>
                    <input className='form-input' type="text" placeholder='Shut up' />
                    <input className='form-input' type="text" placeholder='and take my money' />
                    <button onClick={e => e.preventDefault()} className='form-btn' type="submit">Get a new meme Image</button>
                </form>
                <img className='meme-img' src="https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/11989911854_8a3f316e47_o.webp" alt="logo" />
        </div>
            
        </>
    )
}

export default Main