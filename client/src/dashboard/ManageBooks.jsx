import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const ManageBooks = () => {

  const[allBooks, setAllBooks] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])

  // Delete books button handler...
  const handleDelete = (id) => {
    // console.log(id)
    fetch(`http://localhost:8080/book/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is Deleted Successfully!!!")
      // setAllBooks(data);
    });
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* Table for Book data */}

      {/* Firstly I use Flowbite for tables. But they cannot run. Before this work they can smoothly work..
      then, I will use this table can create scratch */}

      <table className="min-w-full bg-white dark:bg-gray-800 lg:w-[1180px]">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Numbering
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Book Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prices (₹)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <span>Edit or Manage</span>
            </th>
          </tr>
        </thead>

        {
          allBooks.map((book, index) => 
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700" key={book._id}>
              <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>{index + 1}</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {
                book.bookTitle
              }
            </td>
            <td className="px-6 py-4">
              {
                book.authorName
              }
            </td>
            <td className="px-6 py-4">
              {
                book.category
              }
            </td>
            <td className="px-6 py-4">
              {
                book.bookPrice
              }
            </td>
            <td>
              <Link className="font-medium text-blue-500 hover:underline dark:text-blue-500 mr-5"
               to={`/admin/dashboard/edit-books/${book._id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">Delete</button>
            </td>
          </tr>
            </tbody>
          )
        }

      </table>
      
    </div>
  );
};

export default ManageBooks;
