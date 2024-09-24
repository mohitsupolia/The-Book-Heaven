import React, { useState } from 'react';
import BannerCard from '../home/BannerCard'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm) {
          navigate(`/book-category?category=${searchTerm}`);
        }
      };

  return (
    <div className='px-4 lg:px-24 bg-cyan-300 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* Left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books<span className='text-blue-700'> for the Best Prices</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo nobis vero unde sint fugit quas, voluptates repellendus corrupti cum dolorem! Vitae ea nulla sequi assumenda?</p>
                <div>
                    <input
                     type='search'
                     name='search' 
                     placeholder='Search any Book' 
                     className='py-2 px-2 rounded-s-sm outline-none' 
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200' onClick={handleSearch} >Search</button>
                    
                </div>
            </div>

            {/* Right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner




