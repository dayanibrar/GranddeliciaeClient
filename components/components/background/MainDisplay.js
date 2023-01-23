import React from 'react'

const MainDisplay = () => {
  return (
    <div>
      <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/ResortDisplayOne.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-yellow-700 mix-blend-multiply" />
                </div>
                <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center">
                    <span className="block text-yellow-50 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Escape to grandeur at </span>
                    <span className="block text-yellow-500 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">The Grand Deliciae</span>
                    <span className="block text-yellow-50 text-base font-medium tracking-tight sm:text-base lg:text-base">Spring bookings are open now </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-yellow-50 sm:max-w-3xl">
                  Our Resorts offers guests an unparalleled and indulgent experience, with impeccable service, and luxurious amenities. Avaliable throughout the state of Virginia.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 hover:text-yellow-500 shadow-sm hover:bg-indigo-50 sm:px-8"
                      >
                       Avaliable Booking for spring season
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-yellow-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white hover:text-gray-200 shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                       Avaliable Booking for New Year at TGD
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
  )
}

export default MainDisplay
