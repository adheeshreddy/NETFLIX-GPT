import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

  useNowPlayingMovies();
  return (
    <div className="min-h-screen overflow-x-hidden">
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