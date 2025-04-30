import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { TMDB_OPTIONS } from '../utils/constants';

const useGetMovieTrailer = ({id}) => {
    const dispatch=useDispatch();

    const fetchMovieTrailer= async()=>{
     const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", TMDB_OPTIONS);
     const json=await data.json();
    //  console.log(json);  
     const trailer=json.results.filter((video)=>{ return video.type==="Trailer"});
    //  console.log(trailer);
     const mainTrailer=trailer.length? trailer[0]:json.results[0];
    //  console.log(mainTrailer);
    //  console.log("asdasdasd");
     dispatch(addTrailerVideo(mainTrailer));
    }
    useEffect(()=>{fetchMovieTrailer();},[]);
}

export default useGetMovieTrailer
