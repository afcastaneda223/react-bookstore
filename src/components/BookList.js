import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookList() {
  const myBookArray = useSelector((state) => state.bookArray);

  const dispatch = useDispatch();

  const removeBookBtn = (e) => {
    dispatch(removeBook(e.target));
  };

  return (
    <div>
      {myBookArray.map((book) => (
        <div className="card" key={book.id}>
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-3 fw-bold">
                      <p>Category:</p>
                      <p>Title: </p>
                      <p>Author: </p>
                    </div>
                    <div className="col-9">
                      <p>Fiction</p>
                      <p>{book.title}</p>
                      <p>{book.author}</p>
                    </div>
                  </div>
                  <div className="container">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <button type="button" className="btn btn-outline-primary">Edit</button>

                      <button type="button" className="btn btn-outline-primary">Comment</button>

                      <button type="button" onClick={removeBookBtn} id={book.id} className="btn btn-outline-primary">Remove</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="progress mt-5">
                    <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                </div>
                <div className="col text-end">
                  <p>Current chapter</p>
                  <p>Chapter 17</p>
                  <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
