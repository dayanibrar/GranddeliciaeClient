import React from 'react'

const Header = () => {

//     <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//     Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//     fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
//   </p>

  return (
    <div className='bg-black'>
    <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-8 lg:text-left">
        <h1>
          <span className="block text-base font-semibold text-yellow-700 sm:text-lg lg:text-base xl:text-lg">
            The Grand Deliciae Resorts
          </span>
          <span className="mt-1 block text-3xl font-bold tracking-tight sm:text-5xl xl:text-4xl">
            <span className="block text-white">Escape to Grand Deliciae: A luxurious getaway for the<span className="text-yellow-600"> senses</span></span>
            
          </span>
        </h1>
  
      </div>
      <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
       
        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
          <h1>Sections</h1>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default Header