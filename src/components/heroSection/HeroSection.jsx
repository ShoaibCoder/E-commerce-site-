import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HeroSection.css';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
    <div className="relative z-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper shadow-md "
      >
        {/*------------------------------------Swiper 1------------------------------------------------ */}
        
        
        <SwiperSlide>
        <div className="relative overflow-hidden bg-white mt-6 ">
              <div className="pb-60  sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                  <div className="sm:max-w-lg">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Summer styles are finally here
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                      This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                      if you live or die.
                    </p>
                  </div>
                 
                  <div>
                    <div className="mt-10">
                      {/* Decorative image grid */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                      >
                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                          <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 lg:grid ">
                              <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                <img
                                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                  alt=""
                                  className="h-full w-full object-cover object-center shadow-gray-900 hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.unsplash.com/photo-1580940297242-de58bcc3ab69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                                  alt=""
                                  className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                              </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="h-54 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.unsplash.com/photo-1520013333831-acd77cc08fd3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt=""
                                  className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                              </div>
                              <div className="h-74 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.unsplash.com/photo-1529809773508-cd894c3de760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGhhbmRzb21lJTIwYm95cyUyMGluJTIwaG9vZGllfGVufDB8fDB8fHww"
                                  alt=""
                                  className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                              </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.unsplash.com/photo-1566047230499-0b6d88beee82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
                                  alt=""
                                  className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                  alt=""
                                  className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
        
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>
        {/*------------------------------------Swiper 2------------------------------------------------ */}
        <SwiperSlide>
        
        <div className="relative overflow-hidden bg-white ">
  <div className="">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="pb-59">
          <div className=" sm:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-20 ">
            Own the outfit of being simple and stylist           
            </h1><br />
            <p className="px-1 pt-2 text-3xl font-bold text-black bg-yellow-500 opacity-90">
           MIN 55% OFF
            </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full overflow-hidden rounded-lg mb-6">
          <img
            src="https://images.unsplash.com/photo-1618333832740-86db840a1f55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  </div>
</div>


        </SwiperSlide>
        {/* Swiper 3 */}
        <SwiperSlide>
        
        <div className="relative overflow-hidden bg-white ">
  <div className="">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        <div className=''>
          <div className="pb-59  rounded-xl">
          <div className=" sm:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-20 ">
            Check out for Fresh Arrivals
            </h1><br />
            <p className="bg-gradient-to-r from-teal-600 to-blue-800  px-1 pt-2 text-3xl font-bold text-black bg-yellow-500 opacity-90">
              40 to 60% OFF 
             </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full overflow-hidden rounded-lg mb-6">
          <img
            src="https://images.unsplash.com/photo-1511892549826-a48122d9b258?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  </div>
</div>


        </SwiperSlide>



        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

     
      </div>
    </>
  );
};

export default HeroSection;
