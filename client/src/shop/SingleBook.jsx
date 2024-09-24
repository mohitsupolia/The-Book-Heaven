import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

const SingleBook = () => {
  const { bookTitle, imageURL, authorName, category, bookDescription, bookPrice } = useLoaderData();

  return (
    <div className="min-h-screen bg-cyan-300 py-16">
      {/* Container for book details */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 bg-white shadow-lg rounded-lg p-8 lg:p-16">
        
        {/* Book Image Section */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <img 
            src={imageURL} 
            alt={bookTitle} 
            className="w-80 h-auto object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        
        {/* Book Info Section */}
        <div className="lg:w-2/3 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            
            {/* Title and Author */}
            <h1 className="text-4xl font-bold text-gray-900">{bookTitle}</h1>
            <p className="text-xl text-gray-600">Author:  <span className="font-semibold text-gray-800">{authorName}</span></p>
            
            {/* category and Price */}
            <p className="text-sm text-black-500 uppercase font-semibold">Category:  {category}</p>
            <p className="text-2xl font-bold text-blue-600"> <MdCurrencyRupee className='inline mr-1' /> {bookPrice}</p>

            {/* Description */}
            <div className="mt-4 text-gray-700">
              <h2 className="text-xl font-semibold mb-2">Description:</h2>
              <p>{bookDescription}</p>
            </div>

            {/* Book PDF URL */}
            {/* <div className="mt-4 text-gray-700">
              <h2 className="text-xl font-semibold mb-2">Book PDF URL:</h2>
              <p>{bookPDFURL}</p>
            </div> */}

          </div>

          {/* Buy Now Button */}
          <div className="mt-8 lg:mt-12">
            <Link to="/order"
            state={{bookPrice}} // Pass book detials to order Page.....
            >
            <button className="w-full lg:w-1/2 py-3 px-5 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-black transition-colors">
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBook;

