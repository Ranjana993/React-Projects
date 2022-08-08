import React from 'react'
import "./Home.css"
import Movie from '../Movie/Movie'
import Search from '../SearchComponent/Search'


const Home = () => {

    return (
        <div className='home__Container'>
            <Search />
            <Movie />
        </div>
    )
}

export default Home