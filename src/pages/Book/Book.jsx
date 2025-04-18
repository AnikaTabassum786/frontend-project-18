import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
const Book = ({singleBook}) => {
    const{bookName,bookId,author,image,rating,category,tags,yearOfPublishing,publisher} = singleBook
    return (
        <>
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-6 bg-gray-100 w-2/3 mx-auto'>
    <img className='h-[166px]'
      src={image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between'>
    {
      tags.map((tag,index)=><button key={index}>{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>{publisher}</p>
    <p>By: {author}</p>
    <div className="card-actions justify-end">
      <div className="badge">{category}</div>
      <div className="badge ">{rating} <FaRegStar></FaRegStar></div>
    </div>
  </div>
        </div>
        </Link>
        </>
    );
};

export default Book;