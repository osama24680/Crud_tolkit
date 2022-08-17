import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { loggedInOut } from "../Store/AuthSlice"
const Header = () => {

  let data = useSelector(state => state.books)
  let dispatch = useDispatch()
  let auth = useSelector(state => state.auth)



  return (
    <>
      {data.error && (
        <div className="alert alert-danger" role="alert">{data.error}</div>
      )}
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <span className='navbar-brand mb-0 h1'>My Books</span>
            <button className='btn btn-outline-primary ' onClick={()=>dispatch(loggedInOut())}> {auth.isLogged ? "Log Out" : " Log In"}</button>
        </div>

      </nav>
    </>

  );
};

export default Header;
