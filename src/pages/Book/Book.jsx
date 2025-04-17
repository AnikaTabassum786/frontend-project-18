import React from 'react';

const Book = ({singleBook}) => {
    const{bookName,author,image,rating} = singleBook
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-40 h-40 py-4'
      src={image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <p>{bookName}</p>
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By: {author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>
    );
};

export default Book;