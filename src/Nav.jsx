import React, {useContext} from 'react'
import { MovieContext } from "./MovieListContext"
 
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            <nav>
                <p>list of movies: {movies.length}</p>
            </nav>
        </div>
    )
}

export default Nav
