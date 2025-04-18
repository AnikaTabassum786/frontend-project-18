import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDb';

const BookDetails = () => {
    const {id} = useParams()
    const paramsId = parseInt(id)
     console.log(typeof(id))

    const data = useLoaderData()
    // console.log(data)

    const singleBook = data.find(book => book.bookId === paramsId)
     console.log(singleBook)
     const {image,bookName} = singleBook

     const handleMarkAsRead=(id)=>{
        addToStoreDB(id)
     }
    return (
        <div>
           <img src={image} alt="" />
           {bookName}

           <div className='flex gap-4'>
               <button onClick={()=>handleMarkAsRead(id)} className='btn'>Mark As Read</button>
               <button className='btn'>Add To Wishlist</button>
           </div>
        </div>
    );
};

export default BookDetails;