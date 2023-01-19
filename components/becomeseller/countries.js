/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Australia',
  },
  {
    name: 'Austria',
  },
  {
    name: 'Belgium',
  },
  {
    name: 'Brazil',
  },
  {
    name: 'Bulgaria',
  },
  {
    name: 'Canada',
  },
  {
    name: 'Cyprus',
  },
  {
    name: 'Czech Republic',
  },
  {
    name: 'Denmark',
  },
  {
    name: 'Estonia',
  },
  {
    name: 'Finland',
  },
  {
    name: 'France',
  },
  {
    name: 'Germany',
  },
  {
    name: 'Greece',
  },
  {
    name: 'Hong Kong',
  },
  {
    name: 'Hungary',
  },
  {
    name: 'India',
  },
  {
    name: 'Ireland',
  },
  {
    name: 'Italy',
  },
  {
    name: 'Japan',
  },
  {
    name: 'Latvia',
  },
  {
    name: 'Lithuania',
  },
  {
    name: 'Luxembourg',
  },
  {
    name: 'Malasyia',
  },
  {
    name: 'Malta',
  },
  {
    name: 'Mexico',
  },
  {
    name: 'Netherlands',
  },
  {
    name: 'New Zealand',
  },
  {
    name: 'Norway',
  },
  {
    name: 'Poland',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'Romania',
  },
  {
    name: 'Singapore',
  },
  {
    name: 'Slovakia',
  },
  {
    name: 'Slovenia',
  },
  {
    name: 'Spain',
  },
  {
    name: 'Sweden',
  },
  {
    name: 'Switzerland',
  },
  {
    name: 'United Arab Emirates',
  },
  {
    name: 'United Kingdom',
  },
  {
    name: 'United States',
  },
]

export default function Countries() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Countries we are avaliable in</h2>
          <p className="mt-4 text-lg text-gray-500">
           Here's the list of 46 countries we are currently avaliable in. In order to sell products on any Xidas Studios platform you would need
           a bank account and legal documents for verification from these countries.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
            </div>
          ))}
        </dl>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">We will be avaliable in more countries soon</h2>
          <p className="mt-4 text-lg text-gray-500">
          But that's not it, we are working on coming to other countries too and soon we will be avaliable in every country. Please browse to 
          <span>Xidas Studios Sellers Services Invites</span> and provide the name of your country and so that we would know and will work on.
          </p>
        </div>
      </div>
    </div>
  )
}
