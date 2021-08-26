import { v4 as uuidv4 } from 'uuid';
import { useState, React } from 'react';
import { useDispatch, connect } from 'react-redux';
import { addBook } from '../redux/books/books';

export const BookForm = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
    };
    if (inputText.title.trim() && inputText.author.trim()) {
      dispatch(addBook(newBook));
      setInputText({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form onSubmit={submitBookToStore} className="row my-5">
      <div className="col-5">
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
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Book Author"
          value={inputText.author}
          name="author"
          onChange={onChange}
          required
        />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary">Add Book</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  title: state.title,
  author: state.author,
  id: state.id,
});

export default connect(mapStateToProps)(BookForm);