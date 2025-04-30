
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch=useDispatch();
    const getPopularMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', TMDB_OPTIONS);
      const json=await data.json();
      dispatch(addPopularMovies(json.results));
    }
  useEffect(()=>{
    getPopularMovies();
  },[])
}

export default usePopularMovies;
