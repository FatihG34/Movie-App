import React from 'react'
import axios from 'axios'

const MovieDetail = () => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const url3 = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    const postDetails = async () => {
        try {
            const getDetail = await axios.get(url3)
            setDetail(getDetail.data)
            console.log(detail);
        } catch (error) {
            console.log(error);
        }
        console.log(detail);
        navigate('movieDetail')
    }

    return (
        <div>
            burası details
            {/* {state.title} */}
        </div>
    )
}

export default MovieDetail

    // { title, poster_path, vote_average, vote_count, release_date }