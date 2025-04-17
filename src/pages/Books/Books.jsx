import React, { Suspense } from 'react';
import Book from '../Book/Book';


const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([])

    // useEffect(()=>{
    //  fetch('bookData.json')
    //  .then(res=>res.json())
    //  .then(data=>setAllBooks(data))
    // },[])
    return (
        <div>
            <h3 className='text-3xl text-center p-6'>Books</h3>
             <Suspense fallback={<span>Loading...</span>}>
                  <div className='grid grid-cols-3 gap-10'>
                  {
                    data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                  }
                  </div>
             </Suspense>
        </div>
    );
};

export default Books;