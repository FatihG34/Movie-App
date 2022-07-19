import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Main = () => {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState('')

    const API_KEY = process.env.REACT_APP_KEY;
    // const url1 = `https://api.themoviedb.org/3/discover/movie?api_key=8ce831c185de710fb76fb0da9816d7fb`
    const url1 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

    const url2 = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`

    const getMovie = async () => {
        try {
            const getdata = await axios.get(url1)
            setMovie(getdata.data.results)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovie();
    }, [])
    const getSearch = async (e) => {
        e.preventDefault();
        try {
            const searchdata = await axios.get(url2)
            setMovie(searchdata.data.results)
        } catch (error) {
            console.log(error);
        }
        setSearch('');
    }
    // console.log(search);
    console.log(movie);
    return (
        <div>
            <nav className="navbar navbar-light bg-warning justify-content-center">
                <form className="form-inline d-flex gap-2"
                    onSubmit={getSearch}
                >
                    <input
                        className="form-control mr-sm-2"
                        type="search" placeholder="Search"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="btn btn-outline-success bg-primary text-white my-2 my-sm-0"
                        type="submit">Search</button>
                </form>
            </nav>
            <div className='d-flex flex-wrap gap-4 justify-content-center mt-3'>
                {movie?.map((item, index) => <MovieCard item={item} key={index} />)}
            </div>
        </div>
    )
}

export default Main