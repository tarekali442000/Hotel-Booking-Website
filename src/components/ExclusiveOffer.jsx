import React from 'react'
import Title from './Title'
import { useNavigate } from 'react-router-dom'



const ExclusiveOffer = () => {
  const navigate = useNavigate();
  return (
    <div className='mx-20'>
      <div className='flex md:flex-row flex-col items-center justify-between px-6 md:px-16 lg:px-24 py-20 w-full'>
        <Title align={'left'} title={'Exclusive Offers'} subTitle={'Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'}/>
            <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} className="flex items-center transition-all cursor-pointer py-2 mt-10 px-6 gap-2 rounded inline-flex items-center">
                <span>
                  View All Destinations <span className="ml-2">{">>"}</span>
                </span>
                {/* <svg class="w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg> */}
            </button>
      </div>
      
    </div>
  )
}

export default ExclusiveOffer
