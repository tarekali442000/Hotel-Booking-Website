import React from 'react'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { exclusiveOffers } from '../assets/assets'



const ExclusiveOffer = () => {
  const navigate = useNavigate();
  return (
    <div className='mx-20 my-20'>
      <div className='flex md:flex-row flex-col items-center justify-between gap-6 mb-10'>
        <Title align={'left'} title={'Exclusive Offers'} subTitle={'Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'} />
        {/* <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} className="flex items-center transition-all  cursor-pointer py-2 px-6 gap-2 rounded inline-flex font-medium text-gray-700 hover:text-gray-900">
          <span className="group relative inline-flex ">
            View All Offers <span className="ml-2 transition group-hover:translate-x-1"> &rarr;</span>
          </span>
        </button> */}
        <button class="group relative inline-flex h-12 items-center justify-center cursor-pointer overflow-hidden rounded-md  px-6 font-medium text-gray-700">
          <span>View All Offers</span>
            <div class="ml-1 transition group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer'>
        {exclusiveOffers.map((offer) => (
          <div key={offer._id} className='relative rounded-2xl overflow-hidden group h-[400px]'>
            <img src={offer.image} alt={offer.title} className='w-full h-full object-cover transition-transform duration-500 ' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent'></div>

            {/* Badge */}
            <div className='absolute top-6 left-6 bg-white text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider'>
              {offer.priceOff}% OFF
            </div>

            {/* Content */}
            <div className='absolute bottom-0 left-0 p-8 text-white w-full'>
              <h3 className='text-2xl font-playfair font-medium mb-2'>{offer.title}</h3>
              <p className='text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2'>{offer.description}</p>
              <p className='text-xs text-gray-400 mb-6'>Expires {offer.expiryDate}</p>
              <button class="group relative inline-flex h-12 items-center justify-center cursor-pointer overflow-hidden rounded-md  px-6 font-medium"><span>View All Offers</span><div class="ml-1 transition group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffer
