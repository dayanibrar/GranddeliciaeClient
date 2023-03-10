import React from 'react'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
const Header = () => {

  //     <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
  //     Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
  //     fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
  //   </p>

  // <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32">
  // <div className="lg:grid lg:grid-cols-12 lg:gap-8">
  //   <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-8 lg:text-left">
  //     <h1>
  //       <span className="block text-base font-semibold text-yellow-700 sm:text-lg lg:text-base xl:text-lg">
  //         The Grand Deliciae Resorts
  //       </span>
  //       <span className="mt-1 block text-3xl font-bold tracking-tight sm:text-5xl xl:text-4xl">
  //         <span className="block text-white">Escape to Grand Deliciae: A luxurious getaway for the<span className="text-yellow-600"> senses</span></span>

  //       </span>
  //     </h1>

  //   </div>
  //   <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">

  //     <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md mt-2 mb-2">
  //       <h1 className='text-white text-base'>Sections</h1>
  //       <hr className='text-white border-t-2 border-white mt-2 mb-2 w-50' />
  //       <h1 className='text-white text-base'>Sections</h1>
  //       <hr className='text-white border-t-2 border-white mt-2 mb-2 w-50' />
  //       <h1 className='text-white text-base'>Sections</h1>
  //     </div>
  //   </div>
  // </div>
  // </main>

  return (
    <div className='bg-black'>
      <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold text-yellow-700 sm:text-lg lg:text-base xl:text-lg">
                The Grand Deliciae Resorts
              </span>
              <span className="mt-1 block text-3xl font-bold tracking-tight sm:text-5xl xl:text-4xl">
                <span className="block text-white">The Grand Deliciae: A luxurious getaway for the<span className="text-yellow-600"> senses</span></span>
              </span>
            </h1>
            <div className="mt-3 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <p className="text-base font-medium text-gray-400">A project by <span><a href='https://www.dayanibrar.com' className='hover:text-gray-100'>Dayan Ibrar</a></span></p>
            </div>
          </div>
          <div className="relative  sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-3 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md mt-2 mb-5 md:mb-5 alignment-margin-bottom">
             <div>
             <h1 className='text-white text-base'>Get to know this Website<span className='mx-2 text-base'><ArrowOutwardRoundedIcon /></span></h1>
              <hr className='text-white border-t-2 border-white mt-2 mb-2 w-50' />
              <h1 className='text-white text-base'>Learn the tech stack behind this website<span className='mx-2 text-base'><ArrowOutwardRoundedIcon /></span></h1>
              <hr className='text-white border-t-2 border-white mt-2 mb-2 w-50' />
              <h1 className='text-white text-base'>Github Repository for client side<span className='mx-2 text-base'><ArrowOutwardRoundedIcon /></span></h1>
              <hr className='text-white border-t-2 border-white mt-2 mb-2 w-50' />
              <h1 className='text-white text-base'>Github Repository for server side<span className='mx-2 text-base'><ArrowOutwardRoundedIcon /></span></h1>
             </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Header