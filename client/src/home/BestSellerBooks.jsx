import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const[books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/all-books`).then(res => res.json()).then(data => setBooks(data.slice(0, 9)));
    }, [])
  return (
    <div>
      <BookCards books={books} headLine="Best Seller Books" />
    </div>
  )
}

export default BestSellerBooks
