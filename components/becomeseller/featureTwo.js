/* This example requires Tailwind CSS v2.0+ */
export default function FeatureTwo() {
    return (
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Features to help you create, manage and grow</h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
              Create, manage and grow your business and products with our built in services and features such as InMails, Pages, Ads, Publishment, XABSM, Xidas Academy onboarding and more.
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Countries</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">46</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Services and Features</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">15+</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Benefits</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">20+</dd>
            </div>
          </dl>
        </div>
      </div>
    )
  }
  