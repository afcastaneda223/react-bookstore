import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uniqueNamesGenerator, starWars, NumberDictionary } from 'unique-names-generator';
import { removeBook, getBook } from '../redux/books/books';

function BookList() {
  const dispatch = useDispatch();
  const fetchApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dtv1KpLO9504v7PYIJl4/books/';
  useEffect(() => {
    const apiBooks = async () => {
      const fetchBook = await fetch(fetchApi);
      const books = await fetchBook.json();
      return dispatch(getBook(books));
    };
    apiBooks();
  }, []);

  const myBookArray = useSelector((state) => state.bookArray);

  const removeBookBtn = (e) => {
    dispatch(removeBook(e.target));
  };

  return (
    <div>
      {myBookArray.map((book) => (
        <div className="card my-3" key={book.id}>
          <div className="card-body">
            <div className="row row-lg-cols-3 text-center">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-12 text-lg-start ps-5">
                    <h5 className="text-muted fs-6">{book.category}</h5>
                    <h4 className="fw-bold fs-5">{book.title}</h4>
                    <p className="blue">{uniqueNamesGenerator({ dictionaries: [starWars] })}</p>
                  </div>
                </div>
                <div className="container text-lg-start">
                  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <button type="button" className="btn btn-outline-primary">Edit</button>
                    <button type="button" className="btn btn-outline-primary">Comment</button>
                    <button type="button" onClick={removeBookBtn} id={book.id} className="btn btn-outline-primary">Remove</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-5 my-3">
                <div className="progress mt-5">
                  <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                    {NumberDictionary.generate({ min: 1, max: 10 }) * 10}
                    %
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <p className="text-muted">Current chapter</p>
                <p className="">
                  Chapter
                  {NumberDictionary.generate({ min: 1, max: 10 })}
                </p>
                <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
