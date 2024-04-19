import { Link } from "react-router-dom";
import { BuildingStorefrontIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

const Footer = () => {
 
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg ">
            <div className="flex items-center">
          <img src="bag.png" alt="" height={'70px'} width={'70px'}/>
          <h2 className='font-body text-center font-extrabold text-gray-600 text-2xl pl-3'>FABDEAL</h2>
          </div>
            <p className="mt-4 text-sm leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum incidunt explicabo fugit molestias sed ut recusandae esse hic, id assumenda amet expedita officia modi molestiae. Tempore quo animi quis!
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 lg:justify-between items-center lg:gap-x-10">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <BuildingStorefrontIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Products</dt>
              <dd className="flex-column mt-2 leading-7 text-gray-400 ">
                <div className="flex space-x-1">
              <h3 >T-shirts</h3>
              </div>
              <div className="flex space-x-1">
             <h3>Jackets</h3>
              </div>
              <div className="flex space-x-1">
              <h3>Mobile</h3>
              </div>
              <div className="flex space-x-1">
              <h3>Laptop</h3>
              </div>
               <div className="flex space-x-1">
               <h3>Shoes & Sneakers</h3>
                 </div>
                 <div className="flex space-x-1">
              <h3 >Home Accessories</h3>
              </div>
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <InformationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">More Info</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam unde error deleniti numquam et ratione consequatur
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}


export default Footer;