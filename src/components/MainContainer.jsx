import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies=useSelector((state)=>state.movies?.nowPlayingMovies);
    if(!movies) return;
    const index=Math.floor(Math.random() * (10 - 0 + 1) + 0);
    const mainMovie=movies[index];
    // console.log(mainMovie);
    const {original_title, overview, id}=mainMovie;
    // const {}

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer
