/* This example requires Tailwind CSS v3.0+ */
export default function LearnMore() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-50">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-black">
            Not sure about booking today? 
              <br />
              Learn more about us to make an informed decision.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-900">
              Learn about our resorts across the United States and the booking process if you are not a US-Citizen, Or simply talk to one of our representative who can help you make a decision and get started.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 hover:text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                About us
              </a>
              <a href="#" className="text-base font-semibold leading-7 text-gray-900 hover:text-gray-700">
                Talk to our representative <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
          <defs>
            <radialGradient
              id="8d958450-c69f-4251-94bc-4e091a323369"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#facc15" />
              <stop offset={1} stopColor="#fbbf24" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    )
  }
  