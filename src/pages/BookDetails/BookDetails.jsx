import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams()
    const paramsId = parseInt(id)
     console.log(typeof(id))

    const data = useLoaderData()
    // console.log(data)

    const singleBook = data.find(book => book.bookId === paramsId)
     console.log(singleBook)
     const {image,bookName} = singleBook
    return (
        <div>
           <img src={image} alt="" />
           {bookName}

           <div className='flex gap-4'>
               <button className='btn'>Read</button>
               <button className='btn'>Wishlist</button>
           </div>
        </div>
    );
};

export default BookDetails;