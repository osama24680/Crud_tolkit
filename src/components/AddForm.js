import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { insertBooks } from "../Store/BookSlice"


const Addform = () => {

  const dispatch = useDispatch()
  let auth = useSelector(state => state.auth)

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  function TitleChange(e) {
    setEnteredTitle(e.target.value)

  }
  function priceChange(e) {
    setEnteredPrice(e.target.value)

  }
  function DescriptionChange(e) {
    setEnteredDescription(e.target.value)

  }
  function handleSubmit(e) {
    e.preventDefault();
    let allData = {
      title: enteredTitle,
      price: enteredPrice,
      description: enteredDescription,
    }
    dispatch(insertBooks(allData)).then(data => { notify(data.payload.title) })


    setEnteredDescription("")
    setEnteredPrice("")
    setEnteredTitle("")
  }

  function notify(title) {
    toast.success(`You have add ${title}`)
  }



  return (
    <div className='row mt-4'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input onChange={TitleChange} type='text' className='form-control' id='title' required value={enteredTitle} />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input onChange={priceChange} type='number' className='form-control' id='price' required value={enteredPrice} />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              onChange={DescriptionChange}
              value={enteredDescription}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary mt-4' disabled={!auth.isLogged}>Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Addform;
