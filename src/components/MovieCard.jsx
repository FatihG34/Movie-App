import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import MovieDetail from '../pages/MovieDetail';
import axios from 'axios';



const MovieCard = ({ item }) => {
    const [detail, setDetail] = useState('');
    const navigate = useNavigate();
    const { title, poster_path, vote_average, overview, id } = item
    // console.log(item);
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
        <div
            onClick={postDetails}
            className="card" style={{ width: '18rem' }} >
            <img src={'https://image.tmdb.org/t/p/original' + poster_path} className="card-img-top" alt={title} />
            <div className="card-body" >
                <h5 className="card-title" > {title}</h5 >
                <p className="card-text" >{overview} </p>
                < a href="#" className="btn btn-primary" > {vote_average}</a >
            </div >
        </div >

    )
}

export default MovieCard