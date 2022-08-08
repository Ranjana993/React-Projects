import React from 'react'
import { useGlobalHook } from '../../context'

const Search = () => {
    const { error, query, setQuery } = useGlobalHook()
    return (
        <div>
            <form action="" onSubmit={(e)=> e.preventDefault()}>
                <input type="text" value={query} onChange={(e => setQuery(e.target.value))} />
            </form>
            <div className="card_error">
                <p>{error.show && error.msg}</p>
            </div>
        </div>
    )
}

export default Search