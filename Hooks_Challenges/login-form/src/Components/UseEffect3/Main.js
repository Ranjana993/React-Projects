import React, { useEffect, useState } from 'react'
import "./Main.css"

const Main = () => {
    const [user, setUser] = useState([])

    const getUser = async () => {
        const response = await fetch('https://api.github.com/users')
        setUser(await response.json())
        // console.log(data);
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>List Of Github Users ....</h1>
                </div><hr />
                <div className="cards">
                    {
                        user.map((data, id) => {
                            return (
                                <div key={id} className="card">
                                    <img src={data.avatar_url} alt="" />
                                    <div className="titles">
                                        <label>Name :</label>  <br /><span>{data.login}</span> <br />
                                        <label>location:</label> <br /> <span>Unknown</span><br />
                                        <label>follower: </label><br /> <span>Unknown</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Main