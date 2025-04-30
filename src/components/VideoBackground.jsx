import React from 'react'
import { TMDB_OPTIONS } from '../utils/constants';

import useGetMovieTrailer from '../hooks/useGetMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({id}) => {
let videoKey=useSelector((store)=>store.movies?.trailerVideo?.key);
    useGetMovieTrailer({id});

    if(!videoKey){
        videoKey="jdgVdMolHlo";
    }
    
//   return (
//     <div className='w-screen overflow-hidden'>
//       <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+videoKey+"?autoplay=1&mute=1&loop=1"}
//        frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//        allowFullScreen></iframe>
//     </div>
//   )
return (
    <div className="w-full overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&playlist=${videoKey}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
  
}

export default VideoBackground
