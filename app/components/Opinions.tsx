import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Opinions = () => {
  return (
    <div className='py-10'>
      <h1 className='text-2xl text-center'>Persons that trust us:</h1>  
      <div className='grid grid-cols-12 gap-6 px-4 justify-items-center'>
        <div id="opinion-1" className="col-span-4 flex flex-col  items-center text-center">
      <UserCircleIcon className='w-2/5'/>
    <h2>Sarah Johnson</h2>
    <p>TopForX improved my trading decisions. Highly recommended</p>
        </div>
        <div id="opinion-2" className="col-span-4 flex flex-col  items-center text-center">
        <UserCircleIcon className='w-1/2 lg"2/5'/>
<h2>David Patel</h2>
<p>My go-to platform for Forex analysis. Invaluable.</p>

        </div>
        <div id="opinion-3" className="col-span-4 flex flex-col items-center text-center">
        <UserCircleIcon className='w-2/5'/>
<h2>Emily Turner</h2>
<p>Boosted my trading confidence. Must-visit for Forex traders.</p>
        </div>

      </div>

    </div>
  )
}

export default Opinions
