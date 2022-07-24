import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../auth/firebase';
import { toastWarnNotify } from '../helpers/ToastNotify';



const MovieCard = ({ item }) => {
    const navigate = useNavigate();
    const { title, poster_path, vote_average, overview, id } = item
    // console.log(item);
    const defaultImage =
        'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

    return (
        <div
            onClick={() => {
                navigate('/movieDetail/' + id);
                !createUser && toastWarnNotify('Please log in to see detail');
            }}
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