import { useDispatch, useSelector } from "react-redux"
import { getDetailBook, deleteBooks } from "../../Store/BookSlice"
import { ToastContainer, toast } from 'react-toastify';

const BooksList = ({ data }) => {
  let dispatch = useDispatch()
  let auth = useSelector(state => state.auth)


  function deleteFunction(item) {
    dispatch(deleteBooks(item)).then(data => { notify(data.payload.title) })
  }

  function notify(title) {
    toast.error(`You have deleted ${title}`)
  }

//onClick={() => dispatch(getDetailBook(item))}
  return (
    <div>
      <h2>Books List</h2>
      <ul className='list-group'>
        {data.length > 0 ? data.map((item, index) => (
          <li className='list-group-item d-flex  justify-content-between align-items-center' key={index}>
            <div key={item.id}>{item.title}</div>
            <div className=' d-flex w-25 justify-content-between' role='group'>
              <button  className='btn btn-primary' onClick={() => dispatch(getDetailBook(item))}> Read </button>
              <button  className='btn btn-danger' disabled={!auth.isLogged} onClick={() => deleteFunction(item)}>
                Delete
              </button>
            </div>

          </li>
        )) : <h2>Your Library is empty</h2>}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default BooksList;
