import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ConnectingAirportsRoundedIcon from '@mui/icons-material/ConnectingAirportsRounded';

const features = [
  {
    name: 'World-Class Amenities',
    description:
      'The Grand Deliciae offers a wide range of luxurious amenities, including a full-service spa, multiple swimming pools, and a state-of-the-art fitness center. Guests can also enjoy fine dining at one of the resorts many gourmet restaurants or indulge in a cocktail at one of its chic bars.      ',
    icon: StarsRoundedIcon,
  },
  {
    name: 'Exceptional Service',
    description:
      ' The staff at the Grand Deliciae is dedicated to providing guests with the highest level of service. From the moment you arrive, you will be treated like royalty, with a team of dedicated concierges and butlers at your service.',
    icon: PersonPinCircleRoundedIcon,
  },
  {
    name: 'Prime Location',
    description:
      'The Grand Deliciae is located in a prime destination, offering guests easy access to the areas top attractions and activities. Whether youre looking to explore the local culture or simply relax on the beach the resorts central location makes it easy to do both.',
    icon: PersonPinCircleRoundedIcon,
  },
  {
    name: 'Stunning Accommodations',
    description:
      'The Grand Deliciae offers a wide range of luxurious accommodations, from spacious suites to private villas. Each room is beautifully appointed with high-end furnishings and amenities, providing guests with the ultimate in comfort and style.',
    icon: ConnectingAirportsRoundedIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-yellow-600">Once in a lifetime experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Luxury at Its Finest at the Grand Deliciae International 7-Star Resort</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-700 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
