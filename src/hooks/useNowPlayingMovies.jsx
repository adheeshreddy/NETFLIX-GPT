
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', TMDB_OPTIONS);
      const json=await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;
