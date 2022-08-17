import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { getBooks } from "../../Store/BookSlice"
import { useDispatch, useSelector } from "react-redux"
import './book.css';

const PostContainer = () => {

  let dispatch = useDispatch()
  let data = useSelector(state => state.books)
  useEffect(() => {
    dispatch(getBooks({ name: "osama", "college": "AAST", id: "19102902" }))
  }, [dispatch])

  
  return (
    <Fragment>
      <hr className='my-5' />
      <div className="d-flex w-100 justify-content-center mb-3"><h1>Book Data</h1></div>
      {data.loading ? "Loading..." : (
        <div className='row'>
          <div className='col'>
            <BooksList data={data.results}/>
          
          </div>
          <div className='col side-line'>
            <BookInfo />
          </div>
        </div>
      )}

    </Fragment>
  );
};

export default PostContainer;
