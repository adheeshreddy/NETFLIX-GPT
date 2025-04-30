import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
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