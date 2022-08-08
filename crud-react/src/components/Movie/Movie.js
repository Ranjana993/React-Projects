import React from 'react'
import "./Movie.css"
import { useGlobalHook } from '../../context'
import { NavLink } from 'react-router-dom'

const Movie = () => {
    const { movie } = useGlobalHook()
    return (
        <div className='Movie__Components'>
            <div className="Cards">

                <div className="cards">
                    {
                        movie.map((singleMovie , id) => {
                            const { imdbID, Poster, Title } = singleMovie
                            const NewMovieName = Title.substring(1, 15)
                            return (
                                <NavLink to={`${movie}/${imdbID}`} key={id}>
                                    <div className='card'>
                                        <h2>{NewMovieName <= 15 ? `${NewMovieName}...` : `${NewMovieName}` }</h2>
                                        <img src={Poster} alt="" />
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Movie