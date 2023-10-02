import React from 'react'
import Chart from './chart'

const Introduce = () => {
  return (
    <div className='grid grid-cols-12 gap-10  px-32 py-10 text-2xl text-stone-700'>
    <div className="col-span-6 border-2 border-black">
        <Chart/>
    </div>
    <div className="col-span-6 text-end" >
    Welcome to TopForX, your premier destination for chart analysis and comprehensive Forex information.
    If you're looking to navigate the dynamic world of foreign exchange trading with confidence and precision,
     you've come to the right place.
    </div>
    </div>
  )
}

export default Introduce
