import React from 'react';
import { BookForm } from './BookForm';
import BookList from './BookList';
// import { useState } from 'react';

function Books() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Books</h1>
        <BookList />
        <BookForm />
      </div>
    </div>
  );
}

export default Books;
