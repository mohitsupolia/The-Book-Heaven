import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

// React icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";


const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-5'>
                    <p className='mb-5'>I love how they offer recommendations based on my previous purchases and preferences.Delivery is always prompt, and the books are in perfect condition when they arrive.
                    It’s a pleasure shopping here every time.</p>
                    <Avatar img="public/profile.jpg" alt="Profile Image" rounded className='w-10 mb-4' />
                    <h5 className='yexy-lg font-medium'>Emma</h5>
                    <p className='text-base'>CEO, Wipro</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-5'>
                    <p className='mb-5'>The book selection is vast, with everything from classics to new bestsellers.
                      Shipping was fast, and the packaging kept my books in great condition.
                      I’ll definitely be ordering again soon!. Good Experience!</p>
                    <Avatar img="https://i.pinimg.com/originals/83/fc/15/83fc15285cbfb4d9080b48c50df3d4b5.jpg" alt="Profile Image" rounded  className='w-10 mb-4'/>
                    <h5 className='yexy-lg font-medium'>Emma</h5>
                    <p className='text-base'>Manager, Google</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-5'>
                    <p className='mb-5'>A fantastic place for all kinds of readers, from casual to avid book lovers.
                     The service was smooth, and I received my order right on time.
                     The pricing is fair, and the variety is unbeatable. My Experience is nice...</p>
                    <Avatar img="https://i.pinimg.com/originals/de/1a/63/de1a63be2e4fed5e1649220fe413642d.jpg" alt="Profile Image" rounded  className='w-10 mb-4'/>
                    <h5 className='yexy-lg font-medium'>Sophia</h5>
                    <p className='text-base'>HR, Infosys</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-5'>
                    <p className='mb-5'>This bookstore consistently provides great deals and a wonderful variety of books.
                       Navigating through genres is a breeze, and finding rare titles is easy.
                       They’ve quickly become my favorite online store!</p>
                    <Avatar img="https://i.pinimg.com/originals/0e/db/f3/0edbf38c0d27da9b9dd4cf8a95c850b7.png" alt="Profile Image" rounded  className='w-10 mb-4'/>
                    <h5 className='yexy-lg font-medium'>Benjamin</h5>
                    <p className='text-base'>CO, Fintech</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-5'>
                    <p className='mb-5'>From novels to non-fiction, this store offers a diverse range of books at competitive prices.
                    The checkout was easy, and I received my books much faster than expected.
                    I’ll definitely be a returning customer!</p>
                    <Avatar img="https://i.pinimg.com/originals/93/bf/d1/93bfd1c9bcce4b7b1ae589c94a0616e6.jpg" alt="Profile Image" rounded  className='w-10 mb-4'/>
                    <h5 className='yexy-lg font-medium'>Alexander</h5>
                    <p className='text-base'>CoFounder, Crowe</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-5'>
                    <p className='mb-5'>I’m always impressed by the variety and the ease of browsing through different genres.
                       Their quick delivery and excellent customer service keep me coming back.
                       Highly recommended for any book enthusiast!</p>
                    <Avatar img="public/profile.jpg" alt="Profile Image" rounded  className='w-10 mb-4'/>
                    <h5 className='yexy-lg font-medium'>Isabella</h5>
                    <p className='text-base'>CA, SBI Bank</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Review
