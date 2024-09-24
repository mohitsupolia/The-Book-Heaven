import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='min-h-screen bg-cyan-300 py-16'>
      <div className='container mx-auto px-4'>
        <div className='bg-white shadow-lg rounded-lg p-8 md:p-16'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>About Us</h1>
          <p className='text-lg text-gray-600eading-relaxed mb-6'>
            Welcome to<span className='font-semibold'> The Book Haven</span>, your number one source for all kinds of books. We’re dedicated to providing you with the best reading experience, with a focus on variety, customer service, and uniqueness.
          </p>

          <div>
            <div className='grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>Our Goals</h2>
              <p className='text-gray-600 leading-relaxed mb-4'>
              At The Book Haven, our mission is simple – to ignite a passion for reading by making a diverse range of books easily accessible to all. Whether you're a seasoned book lover or new to the world of literature, we’re here to help you discover your next favorite book.
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>Why Choose Us?</h2>
              <p className='text-gray-600 leading-relaxed'>
              We carefully curate our collection to ensure there’s something for everyone. Our knowledgeable staff is always ready to assist you in finding the perfect book for any occasion. From the classics to the latest bestsellers, our store has something special for every reader.
              </p>
            </div>
          </div>

          <div className='mt-10'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Our Story</h2>
            <p>
            Founded in 2024, <span className='font-semibold'>The Book Haven</span> has come a long way from its beginnings in a small office. When we first started out, our passion for books drove us to create a space where book enthusiasts could come together. Today, we serve customers all over the world, and are thrilled to be a part of the ever-growing reading community.
            </p>
          </div>

          <div className='mt-10 flex justify-center'>
            <Link to="/contact" >
            <button className='bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-black transition duration-300'>
              Contact Us
            </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
