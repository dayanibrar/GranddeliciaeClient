/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function AboutComp() {
    return (
      <div className="overflow-hidden bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <h2 className="text-lg font-semibold text-yellow-600">The Grand Deliciae</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              What makes us different
            </p>
          </div>
          <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
            <p className="text-lg text-gray-500">
            This project is based on a Nationwide 7-star luxury resort called “The Grand Deliciae” the  word Deliciae comes from the Latin word “dēliciārum” the genitive plural of dēliciae. The two words “Grand” and “Deliciae” were combined together to form the name “The Grand Deliciae” which means “Magnificent Luxuries”.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="relative z-10">
              <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
                <p>
                The Grand Deliciae is based on a 7-star luxury resort located across the United States of America which provides luxury services and private villas to rent out. The Grand Deliciae Resorts are all built in one of the most breathtaking locations and close to the city's top attractions, it also provides tour guides, luxury and private tour wagons and cars, and pickup from the airport and drop-down for its customer. It also provides memberships for its top members which include your tickets, flying business class to the resort, pick up and drop down, drivers, customized meals, casino, free access to hotels on membership points, and gifts and rewards for its members.
                </p>

                <br />
                <p>
                The Grand Deliciae Resorts is an opulent and world-class international resort chain, available at prime locations throughout the state of Virginia, including Springfield, Tysons, Washington DC, Alexandria, Arlington, Fairfax, Stafford, and Woodbridge. Each location offers guests an unparalleled and indulgent experience, with impeccable service, and luxurious amenities.
                <br />
                <br />
The guest rooms at The Grand Deliciae Resorts are nothing short of extraordinary. They are designed to provide guests with the ultimate in comfort, style, and technology, featuring plush bedding, flat-screen TVs, and marble bathrooms with separate showers and tubs. Guests can also enjoy the breathtaking views of the surrounding areas from their room's private balconies. The resort offers several dining options, including a 5-star fine dining restaurant that serves a wide range of international and local dishes.

                </p>
                <p>
                <br />
The Grand Deliciae Resorts also offers an array of recreational activities and facilities, including a full-service spa, fitness center, an indoor and outdoor pool, and tennis courts. Guests can also take advantage of the resort's 18-hole golf course, located just minutes away from the property. The resort also offers concierge services to help guests plan their activities, whether it's a trip to a nearby attraction or a romantic dinner. The Grand Deliciae Resorts is the perfect choice for those looking for a lavish and memorable getaway in Virginia. The resort is also a great choice for international travelers who looking for a 5-star luxury experience.
                </p>
              </div>
              <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
                <div className="rounded-md shadow">
                  <a
                    href="https://www.notion.so/The-Grand-Deliciae-Project-46790c4528d54fb99cb62b29a4ef4d8e"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-5 py-3 text-base font-medium text-white hover:text-white hover:bg-yellow-700"
                  >
                    View the documentation for this app
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
              </svg>
              <blockquote className="relative rounded-lg bg-white shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <img
                    src="/images/granddeliciaelogo.png"
                    alt="Workcation"
                    className="h-16 rounded-md"
                  />
                  <div className="relative mt-8 text-lg font-medium text-gray-700">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                    I recently had the pleasure of staying at the 7 star resort and it was truly a luxurious experience. From the moment I arrived, the staff went above and beyond to make me feel welcome and ensure that my stay was comfortable. The room was spacious and beautifully decorated, with all the amenities I could ask for.
                    </p>
                  </div>
                </div>
                <cite className="relative flex items-center rounded-b-lg bg-yellow-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                  <span className="relative flex-none rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-300 sm:h-20 sm:w-20"
                      src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                      alt=""
                    />
                  </span>
                  <span className="relative ml-4 font-semibold leading-6 text-gray-300 sm:ml-24 sm:pl-1">
                    <span className="font-semibold text-white sm:inline">Judith Black</span>{' '}
                    <span className="sm:inline">CEO at Workcation</span>
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
  