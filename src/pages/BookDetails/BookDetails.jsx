import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDb';


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


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

        MySwal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          })
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