import { v4 as uuidv4 } from 'uuid';
import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const [inputText, setInputText] = useState({
    title: '',
    category: 'Fiction',
  });

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: inputText.title,
      category: inputText.category,
    };
    if (inputText.title.trim()) {
      dispatch(addBook(newBook));
      setInputText({
        title: '',
      });
    }
  };

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={submitBookToStore} className="row my-5 ps-5">
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Book title"
          value={inputText.title}
          name="title"
          onChange={onChange}
          required
        />
      </div>
      <div className="col-4">
        <select name="category" className="form-select" id="category" value={inputText.category} onChange={onChange}>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Adventure">Adventure</option>
        </select>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary">Add Book</button>
      </div>
    </form>
  );
};

export default BookForm;
