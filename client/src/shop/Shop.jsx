import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

const Shop = () => {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    // Otherwise localhost 8080
    fetch("http://localhost:8080/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-8'>All Books are Here...</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          books.map(book => <Card
          >
            <Link to={`/book/${book._id}`}>

            <div className="w-full h-96 flex justify-center items-center">
            <img src={book.imageURL} alt="Book Image" className="max-h-full hover:scale-105 transition-transform duration-300" />
           </div>

            <h3 className="text-xl font-bold text-center">{book.bookTitle}</h3>
            <p className='font-semibold text-center'>Author: <span className='font-bold'>{book.authorName}</span></p>
              <p className='font-semibold text-center'>Category: <span className='font-bold'>{book.category}</span></p>
              <p className='font-semibold text-center'> <MdCurrencyRupee className='inline mr-1' /> {book.bookPrice}</p>

            </Link>

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
    </div>
  )
}

export default Shop
