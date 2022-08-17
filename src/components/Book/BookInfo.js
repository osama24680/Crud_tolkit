import React, { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux"

const BookInfo = () => {
  let auth = useSelector(state => state.books.detailsBook)

  return (
    <Fragment>
      {auth.length === 0 ?
        (
          <>
            <h2>Book Details</h2>
            <div className='alert alert-secondary' role='alert'>
              There is no post selected yet. Please select!
            </div>
          </>)
        : (
          <div className="list-group-item d-flex   flex-column mt-5">
            <p ><span className='fw-bold'>Title:</span>  {auth.title}</p>
            <p ><span className='fw-bold'>Author:</span>  {auth.userName}</p>
            <p ><span className='fw-bold'>Description:</span> {auth.description}</p>
            <p ><span className='fw-bold'>Price:</span>  {auth.price}</p>
          </div>)

      }
    </Fragment>
  );
};

export default BookInfo;
