/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
    {
      name: '7 star Luxury bedrooms created for you',
      role: 'Istanbul, Turkey',
      imageUrl:
        '/images/bedroom.jpg',
      bio: 'A quick look at our bedrooms from our international resort in Istanbul, Turkey.',
    },
    {
        name: 'Luxury Bathrooms, with modern and spa features',
        role: 'Washington, DC',
        imageUrl:
          '/images/bathroomtwo.jpg',
        bio: 'How the luxuries have been designed with hydro baths and alot more to help you relax',
      },
      {
        name: 'Breath-Taking views from our pools',
        role: 'Richmond, Virginia',
        imageUrl:
          '/images/view.jpg',
        bio: 'Built on one of the most finest attractions with easy access to main-points, airports, cab etc.',
      },
      {
        name: 'Gyms to keep you fit even on vacations',
        role: '8th Ave, New York city',
        imageUrl:
          '/images/gym.jpg',
        bio: 'Our gyms are equipped modern equipment so you can workout and stay fit while on vacations or if you are a renting a villa. ',
      },
    
    // More Locations and Images...
  ]
  
  export default function OurRooms() {
    return (
      <div className="bg-neutral-900">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl text-yellow-600 font-bold tracking-tight sm:text-4xl">Whats inside our resorts</h2>
              <p className="text-base font-bold text-gray-100">
                A sneak peek from our resorts from around the world.
              </p>
              <p className="text-xl text-gray-50">
              Experience the epitome of luxury at the Grand Deliciae's 7-star rooms, featuring the finest amenities and finishes, including marble bathrooms with spa-like features, private balconies with breathtaking views, and state-of-the-art technology. Indulge in the resort's multiple infinity pools and relax in the comfort of a private cabana. Keep fit in our well-equipped gym with personal trainer available, or rejuvenate in our full-service spa. Every detail has been carefully considered to provide guests with an unparalleled level of comfort and elegance."
              </p>
            </div>
            <div className="lg:col-span-2 -scroll-ml-12">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                      </div>
                      <div className="space-y-1 text-lg font-medium leading-6 text-gray-50">
                        <h3 className="text-gray-50">{person.name}</h3>
                        <p className="text-yellow-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-50">{person.bio}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  