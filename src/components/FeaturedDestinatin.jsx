import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestinatin = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20 pb-30'>

      <Title title={'Featured Destination'} subTitle={'Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'}/>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-15'>
        {roomsDummyData.slice(0,4).map((room, index) =>(
            <HotelCard room={room} index={index} key={room._id}/>
        ))}
      </div>
      <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} className="flex items-center border border-gray-300 hover:bg-gray-50 transition-all cursor-pointer py-2 mt-10 px-6 gap-2 rounded inline-flex items-center">
    <span>
        View All Destinations
    </span>
    <svg class="w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" className="w-6 h-6 ml-2">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</button>
    </div>
  )
}

export default FeaturedDestinatin
