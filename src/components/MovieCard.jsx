import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className='min-w-[200px] h-[300px] bg-gray-800 rounded-lg overflow-hidden shadow-md'>
      <img src={IMAGE_CDN_URL+posterPath} alt="Movie Card"  className="w-full h-full object-cover" />
    </div>
  )
}

export default MovieCard
