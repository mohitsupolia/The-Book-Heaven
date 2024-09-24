import React, { useState } from 'react'
import { Label, Textarea, TextInput } from "flowbite-react";
import { Select } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "Thriller",
    "Sports",
    "Children",
    "Business",
    "History",
    "Self-help",
    "Memoir",
    "Travel",
    "Religion",
    "Art and Design",
    "Others"
  ]

  const [selectedBookCategory, setselectedBookCategory] = useState(bookCategories[0])

  const handleChangeSelectedValue = (event) => {
   // console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  }

  // Handle book Submission...
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const bookPrice = form.bookPrice.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, bookPrice
    }



     console.log(bookObj)

     // Send data to database

     fetch("http://localhost:8080/upload-book",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
     }).then(res => res.json()).then(data => {
     // console.log(data);
     alert("Book Uploaded Successfully !!!")
     form.reset();
     })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className='flex gap-8'>
          {/* Book Title */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
      </div>
      {/* AutherName */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
      </div>

      </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          {/* Book URL */}
          <div className='lg:w-1/2'>
           <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
           </div>
           <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
          </div>
              {/* Category */}
          <div className='lg:w-1/2'>
           <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
           </div>

           <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue} >
            {
              bookCategories.map((option) => <option key={option} value={option} >
                 {option} 
                </option>
              )
            }
           </Select>
          </div>

        </div>

        {/* Third Row Book Description*/}
        <div>
           <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
           </div>
           <Textarea id="bookDescription" name="bookDescription" rows={6} placeholder="Write Your Book Description..." required className='w-full'/>
        </div>

        {/* {Fourth row Book PDF Link} */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required />
      </div>

      {/* Fifth row for Prices */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPrice" value="Book Price (₹)" />
        </div>
        <TextInput id="bookPrice" name="bookPrice" type="text" placeholder="Book Price in ₹" required />
      </div>

      <button type='submit' className='bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Upload Book</button>
      

    </form>
    </div>
  )
}

export default UploadBook
