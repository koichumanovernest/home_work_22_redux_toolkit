import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import './BookForm.css';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const BookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const newBookObject = {
        title: title,
        author: author,
        id: uuidv4(),
      };
      onSubmit(newBookObject);
      setTitle('');
      setAuthor('');
    } else {
      toast.info('Not be empty');
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        {/* <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button> */}

        <button type="button">
          {false ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add Random via API'
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
