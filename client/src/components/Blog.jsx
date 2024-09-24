import React from 'react'
import Marquee from "react-fast-marquee";

const Blog = () => {
  return (
    <div className='min-h-screen bg-cyan-300 py-16'>
      <div className='container mx-auto px-4'>
        <div className='bg-white shadow-lg rounded-lg p-8 md:p-16'>

           {/* Marquee Section */}
          <div className='mb-8'>
            <Marquee
            className='bg-blue-600 text-white p-4 rounded-md'
            pauseOnHover 
            >
              <h1 className='text-4xl font-bold'>Welcome to The Book Heaven Blog!</h1>
            </Marquee>
          </div>

          {/* Paragraph Section */}
          <p className='text-lg text-gray-600 leading-relaxed mb-6'>
          Welcome to <span className='font-semibold'>The Book Heaven Bolg.</span> Explore a treasure trove of book reviews, author insights, and curated reading lists. Find your next favorite read and get inspired!
          </p>

           {/* Blog List */}
          <div className='grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
            <ul className='list-disc pl-5'>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>The Art of Book Cover Design</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>Discover the fascinating world of book cover design. Learn about the creative process behind those eye-catching covers and how they play a crucial role in attracting readers.</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>How to Build a Reading Habit</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>Struggling to find time for reading? Explore practical tips and strategies to build a sustainable reading habit, from setting realistic goals to finding the perfect reading nook.</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>The Benefits of Reading Across Genres</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>Expand your literary horizons by exploring different genres. Learn about the unique benefits each genre offers and how they can enrich your reading experience.</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Book-to-Movie Adaptations: Hits and Misses</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>From beloved classics to modern bestsellers, book-to-movie adaptations are always a hot topic. Dive into some of the most successful and disappointing adaptations and what made them stand out.</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Top Book Recommendations for Various Life Stages</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>Whether you’re a teenager navigating high school or an adult juggling responsibilities, find book recommendations tailored to different life stages and personal growth.</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>How to Start a Book Club</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>Thinking about starting a book club? Get practical advice on organizing your group, choosing the right books, and creating engaging discussions that will keep everyone coming back for more.</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Exploring Independent Authors</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>Independent authors are making waves with unique and fresh perspectives. Discover some standout indie books and why you should consider supporting these talented writers.</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>The Evolution of Reading Formats</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>From print to digital and audiobooks, explore how reading formats have evolved over time and how each format can offer a different reading experience.</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Creating a Home Library: Tips and Ideas</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>Transform your space into a personal haven for book lovers. Get inspired with tips on organizing, decorating, and curating your home library</p>
              </li>

              <li className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Book Recommendations for Different Moods</h2>
                <p className='text-gray-600 leading-relaxed mb-4'>Feeling adventurous, nostalgic, or contemplative? Find book recommendations that match your mood and offer a perfect escape or insight into your current feelings.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog
