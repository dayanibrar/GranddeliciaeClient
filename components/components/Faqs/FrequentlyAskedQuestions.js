/* This example requires Tailwind CSS v3.0+ */
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What amenities does the Grand Deliciae Resort offer?",
    answer:
      " The Grand Deliciae Resort offers a wide range of amenities including a spa, fitness center, multiple swimming pools, a fine dining restaurant, and a bar. Guests can also enjoy a variety of activities and entertainment on the property.      ",
  },
  {
    question: "Are there any age restrictions at the Grand Deliciae Resort?",
    answer:
      " Children of all ages are welcome at the Grand Deliciae Resort. However, some of the amenities and services may have age restrictions, such as the spa and fitness center.",
  },
  {
    question: "Can I bring my pet to the Grand Deliciae Resort?",
    answer:
      "Pets are allowed at the Grand Deliciae Resort.",
  },
  {
    question: "How close is the Grand Deliciae Resort to local attractions?",
    answer:
      "The Grand Deliciae Resort is conveniently located near many popular local attractions. The resort can provide shuttle service or recommend local transportation options to guests.",
  },
  {
    question: "Does the Grand Deliciae Resort offer room service?",
    answer:
      "Yes, the Grand Deliciae Resort offers 24-hour room service to guests.",
  },
  // More questions...
]

export default function Faqs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
