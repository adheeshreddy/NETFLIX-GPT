import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div className="overflow-x-hidden border-0 m-0">
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* {
      -maincontainer 
        -video background
        -video description(title+info)
      -secondaryContainer
        -moviesList*n
          -movieCards*n
      } */}
    </div>
  )
}

export default Browse;