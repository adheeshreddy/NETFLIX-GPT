import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const nowPlayingMoviesList=useSelector((store)=>store.movies?.nowPlayingMovies);
  const PopularMoviesList=useSelector((store)=>store.movies?.popularMovies);
  const upcomingMoviesList=useSelector((store)=>store.movies?.upcomingMovies);
  return (
    <div className=''>

      <MovieList title={"Now Playing"} movies={nowPlayingMoviesList}/>
      <MovieList title={"Upcoming Movies"} movies={upcomingMoviesList}/>
      <MovieList title={"Popular"} movies={PopularMoviesList}/>
      <MovieList title={"Now Playing"} movies={nowPlayingMoviesList}/>
    {/* {
      MovieList-popular
        moviecard*n
      MovieList-trending
      MovieList-Horror
      MovieList-action
    } */}
    </div>
  )
}

export default SecondaryContainer
