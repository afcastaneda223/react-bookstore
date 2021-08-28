import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

function Books() {
  return (
    <div>
      <div className="container">
        <BookList />
        <BookForm />
      </div>
    </div>
  );
}

export default Books;
