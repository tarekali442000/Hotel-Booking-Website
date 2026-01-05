import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../assets/assets'

const HotelCard = ({room, index}) => {
  return (
    <>
    <Link to={"/rooms/" + room._id} onClick={()=> scrollTo(0,0)} key={room._id}>
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-82 mt-20">
        <div class="relative h-56 m-0 overflow-hidden text-white rounded-xl">
            <img src={room.images[0]} alt="card-image" className='w-100'/>
            {index % 2 === 0 && (
  <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
    Best Seller
  </p>
)}

        </div>
        <div class="p-4">
            <div class="flex items-center mb-2">
            <h6 class="font-playfair text-slate-800 text-xl font-semibold">
                {room.hotel.name}
            </h6>
        
            <div class="flex items-center gap-0 5 ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-yellow-600">
                <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="text-slate-600 ml-1.5">5.0</span>
            </div>
            </div>
           <div className='flex items-center gap-1 text-sm'>
             <img src={assets.locationIcon} alt="location" />
            <p class="text-slate-600 leading-normal font-light">
            {room.hotel.address}
            </p>
           </div>
        </div>
        <div class="flex items-center justify-between m-4">
            <p className='text-gray-500'><span className='text-xl text-gray-800'>${room.pricePerNight}</span>/night</p>
            <button class=" rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-gray-800 hover:cursor-pointer active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Book Now
            </button>
        </div>
    </div>
    </Link>
    </>
  )
}

export default HotelCard
