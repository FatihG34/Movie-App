import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { AuthoContext } from '../context/AuthContext';
import { toastWarnNotify } from '../helpers/ToastNotify';
import loadinGif from '../assets/loadingcircle.gif'

const Main = () => {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthoContext);
    // console.log(currentUser)

    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const url1 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    const url2 = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`

    const getMovie = async () => {
        try {
            const getdata = await axios.get(url1)
            setMovie(getdata.data.results)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovie();
    }, [])

    const getSearch = async (e) => {
        e.preventDefault();
        if (search && currentUser) {
            try {
                const searchdata = await axios.get(url2)
                setMovie(searchdata.data.results);
            } catch (error) {
                console.log(error);
            }
        } else if (!currentUser) {
            toastWarnNotify('Please log in to search a movie');
        } else {
            toastWarnNotify('Please enter a text');
        }
    }
    if (loading) {
        return (
            <div className='loading'>
                <img src={loadinGif} alt="" />
            </div>
        )
    }
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
                        className="btn bg-primary text-white my-2 my-sm-0 h-50 w-50 align-self-center"
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