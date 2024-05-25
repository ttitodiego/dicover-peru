"use client"; import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import SideDrawer from "@/components/SideDrawer";

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const clients = [
  {
    id: 1,
    name: 'CevicheStop',
    imageUrl: '/logo.png',
    description: 'Chef Walther seamlessly blends his beloved Peruvian cuisine with an innovative and international twist, offering Los Angeles diners a culinary experience at CevicheStop that is totally unique.',
    category: 'Food & Beverage',
    location: 'Los Angeles, CA',
    linkURL: 'https://www.instagram.com/cevichestop/?hl=en',
  },
  {
    id: 2,
    name: 'JLJ Balloon Decor',
    imageUrl: '/jaqueline.png',
    description: 'We focus on providing an extensive range of decorations to make your event memorable.',
    category: 'Arts',
    linkURL: 'https://www.instagram.com/jlj_balloon_decor?igsh=MWQ1ZGUxMzBkMA==',
  },
  {
    id: 3,
    name: 'Panchitos Restaurant ',
    imageUrl: '/panchito.jpeg',
    description: 'One of the first Peruvian restaurants in New Jersey opened for 40 years selling what we are most known for Peruvian chicken ',
    category: 'Food & Beverages',
    location: 'Peterson, NJ',
    linkURL: 'https://www.instagram.com/panchitos__/',
  },
  {
    id: 4,
    name: 'Sabor Peruvian',
    imageUrl: '/sabor.png',
    description: 'We are an immigrant Peruvian family owned restaurant restaurant serving authentic Peruvian food!',
    category: 'Food & Beverages',
    location: 'Corona, NYC',
    linkURL: 'https://www.yelp.com/biz/sabor-peruvian-rotisserie-chicken-fullerton',
  },
  {
    id: 5,
    name: 'Qosqo Maky',
    imageUrl: '/logo.png',
    description: 'Qosqo Maky is a family-owned business located in the Mission neighborhood since 2010. We are dedicated to sharing Peruvian traditions and culture, featuring crafts from diverse regions across Peru.',
    category: 'Business',
    location: 'San Francisco, CA',
    linkURL: 'https://qosqomakysf.com/pages/about-us',
  },
  {
    id: 6,
    name: 'Sumak Peruvian',
    imageUrl: '/logo.png',
    description: 'Discover Peruvian flavors with fresh ingredients & friendly',
    category: 'Food & Beverages',
    location: 'Anaheim, CA',
    linkURL: 'https://www.instagram.com/sumak_peruvianrestaurant?igsh=MzRlODBiNWFlZA==s',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen]=useState<any>([]);
  return (
    <div>
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {clients.map((client, place:any) => (
        <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200" > 
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src={client.imageUrl}
              alt={client.name}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
            <div  className="relative ml-auto ">
              <div className="-m-3.5 block -p-2.5 text-gray-500 ">
              <p className="text-xs font-light absolute text-center right-0 z-10 mt-0.5 w-24 origin-top-right rounded-md  py-2  ">{client.location} </p>
             
              </div>
            </div>
          </div>
          {/* <img src='/logo.png' alt="" className="pointer-events-none object-cover group-hover:opacity-75" /> */}
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
            
            <span className="text-gray-500">{client.description}</span>
            </div>
            <div className="flex justify-between gap-x-4 py-3 items-center">
              <dt className="text-gray-500">{client.category}</dt>
              <dd className="flex items-start gap-x-2">
               <a href={client.linkURL} target="_blank" className='bg-gray-100 p-2 font-medium rounded-full border-2 text-gray-500 hover:bg-gray-300 hover:shadow-sm text-xs' 
              > Learn More </a>
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>



    </div>
  )
}
