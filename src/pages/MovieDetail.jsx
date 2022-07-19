import React from 'react'
import { useLocation } from 'react-router-dom';
const MovieDetail = () => {
    const location = useLocation();
    // console.log(location);
    return (
        <div>
            burası details
            {/* {state.title} */}
        </div>
    )
}

export default MovieDetail

    // { title, poster_path, vote_average, vote_count, release_date }