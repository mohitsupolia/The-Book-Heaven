import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Card } from "flowbite-react";
import { MdCurrencyRupee } from "react-icons/md";

const SearchCategory = () => {
  const books = useLoaderData(); // This could potentially be an object or undefined, not just an array

  // Ensure `books` is an array
  const bookList = Array.isArray(books) ? books : []; // Use an empty array if `books` is not an array

  return (
    <div className="mt-28 px-4 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-16">Here are the books matching your search...</h2>
      {
      bookList.length === 0 ? (
        <p className='text-4xl font-bold text-center mb-4 text-red-600'>
            Sorry, we couldn't find any books for that category...
          <span className='block text-2xl font-semibold text-gray-800 mt-4'>Please try searching with a different Book Category!</span>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            bookList.map((book) => 
            <Card>
                <Link to={`/book/${book._id}`}>

                <div className='className="w-full h-96 flex justify-center items-center"'>
                    <img src={book.imageURL} alt="Book Image" className="max-h-full hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className='text-xl font-bold text-center'>{book.bookTitle}</h3>
                <p className='font-semibold text-center'>Author: <span className='font-bold'>{book.authorName}</span></p>
                <p className='font-semibold text-center'>Category: <span className='font-bold'>{book.category}</span></p>
                <p className='font-semibold text-center'> <MdCurrencyRupee className='inline mr-1' /> {book.bookPrice}</p>

                </Link>

                 {/* Button Link... */}
                 <Link to="/order"
                 state={{bookPrice: book.bookPrice}} // Pass book detials to order Page.....
                 >
                    <button className='bg-blue-700 font-semibold text-white py-3 rounded-lg hover:bg-black justify-center mt-4 w-full text-lg'>
                        Buy Now
                    </button>
                 </Link>
            </Card>
           )
        }
        </div>
      )}
    </div>
  );
};

export default SearchCategory;


