import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    // console.log(movies);
    // console.log(title);
  return (
    <div className='p-6 bg-black text-white '>
  <h1 className='text-3xl font-bold py-5'>{title}</h1>
  <div className='flex overflow-x-auto scrollbar-hide'>
    <div className='flex gap-5'>
      {movies?.map((movie) => (
        <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
      ))}
    </div>
  </div>
</div>



  )
}

export default MovieList
