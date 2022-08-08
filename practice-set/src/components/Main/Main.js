import React from 'react'
import { useGlobalContext } from '../../context'
import "./Main.css"


const Main = () => {
    const { data } = useGlobalContext()
    return (
        <>
            <div className="container">
                <div className="cards">

                    {
                        data.map((item) => {
                            const { login, node_id , avatar_url } = item
                            return <div className="card">
                                <h4>Title {node_id}</h4>
                                <h4>Name{login}</h4>
                                <img src={avatar_url} alt="" />
                            </div>
                        })
                    }

                    <div className="card">
                        <h4>Title</h4>
                        <h4>Name</h4>
                        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
                    </div>
                    <div className="card">
                        <h4>Title</h4>
                        <h4>Name</h4>
                        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
                    </div>
                    <div className="card">
                        <h4>Title</h4>
                        <h4>Name</h4>
                        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
                    </div>
                    <div className="card">
                        <h4>Title</h4>
                        <h4>Name</h4>
                        <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main