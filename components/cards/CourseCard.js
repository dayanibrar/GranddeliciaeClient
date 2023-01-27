import { Card, Badge } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";

const { Meta } = Card;

import { CheckIcon } from "@heroicons/react/24/outline";

const tiers = [
  {
    id: "tier-hobby",
    name: "Hobby",
    href: "#",
    priceMonthly: 49,
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
    ],
  },
  {
    id: "tier-team",
    name: "Team",
    href: "#",
    priceMonthly: 79,
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
      "Sapiente libero doloribus modi nostrum",
    ],
  },
];

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, updatedAt,  slug, paid, category, description } = course;
  return (
    <>
      <div className="bg-neutral-900 -mt-10">
        <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
          <div className="absolute inset-0">
            <img
              className="absolute object-cover bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
              src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-neutral-900 mix-blend-hue" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-lg font-semibold leading-8 text-yellow-600">
                Our Avaliable Services
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white">
                The right price for you,{" "}
                <br className="hidden sm:inline lg:hidden" />
                and your loved ones
              </p>
              <p className="mt-6 text-lg leading-8 text-white/60">
                Experience luxury and create memories with your loved ones and
                book your dream vacation at your dream city.
              </p>
            </div>
          </div>
        </div>
        <div className="flow-root bg-gray-50 pb-32 lg:pb-40">
          <div className="relative -mt-80">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
                <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                  <div className="p-8 sm:p-10">
                    <h3
                      className="text-lg font-semibold leading-8 tracking-tight text-yellow-600"
                     
                    >
                      {name}
                    </h3>
                    <img src={image.Location} alt={name} className="h-18 w-50 rounded-md md:h-18 sm:h-18"/>
                    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                      {paid
                        ? currencyFormatter({
                            amount: price,
                            currency: "usd",
                          })
                        : "Free"}
                      <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                        /per night
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                    {description && description.substring(0, 300)}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                      <ul role="list" className="space-y-6">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-yellow-600"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-600">
                             {category}
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-yellow-600"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-600">
                            Last udpated {new Date(updatedAt).toLocaleDateString()}
                            </p>
                          </li>
                      </ul>
                      <div className="mt-8">
                        <a
                          href={`/services/${slug}`}
                          className="inline-block w-full rounded-lg bg-yellow-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:text-white hover:bg-yellow-700"
                          
                        >
                         Book now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-md lg:max-w-4xl">
              <div className="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-yellow-600">
                    Discounted
                  </h3>
                  <div className="mt-2 text-base leading-7 text-gray-600">
                  Experience unparalleled luxury at our 7-star resort with a limited time membership discount for just{" "}
                    <span className="font-semibold text-gray-900">$5599</span>.
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-neutral-100 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-yellow-700 hover:bg-neutral-100 hover:text-yellow-600"
                  >
                    Buy TGD lifetime Membership{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className="mb-4"
          cover={
            <img
              src={image.Location}
              alt={name}
              style={{ height: "200px", objectFit: "cover" }}
              className="p-1"
            />
          }
        >
          <h2 className="font-weight-bold">{name}</h2>
          <p>by {instructor.name}</p>
          <Badge
            count={category}
            style={{ backgroundColor: "#03a9f4" }}
            className="pb-2 mr-2"
          />
          <h4 className="pt-2">
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "usd",
                })
              : "Free"}
          </h4>
        </Card>
      </a>
    </Link> */}
    </>
  );
};

export default CourseCard;
