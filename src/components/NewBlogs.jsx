import React, { useState } from 'react';
import blogsService from '../../services/blogs';

const NewBlogs = ({ userLogged, setMessage, setBlogs }) => {
  const initValues = { tittle: '', author: '', url: '' };
  const [newBlog, setNewBlog] = useState(initValues);

  const handleBlogChange = (e) => {
    e.preventDefault();
    setNewBlog({
      ...newBlog,
      [e.target.name]: e.target.value,
    });
  };

  const handleNew = async (e) => {
    e.preventDefault();
    try {
      const newBlogs = await blogsService.create(userLogged?.token, newBlog);
      setBlogs(newBlogs);
      setMessage(`a new blog ${newBlog.tittle} by ${newBlog.author} added`);
      setNewBlog(initValues);
    } catch (error) {
      setMessage(`error: ${error}`);
    }
  };

  return (
    <>
        <h1>Create new</h1>
        <form onSubmit={handleNew}>
        <input
            type='text'
            name='tittle'
            placeholder='Tittle'
            onChange={handleBlogChange}
            value={newBlog.tittle}
        />
        <br />
        <input
            type='text'
            name='author'
            placeholder='Author'
            onChange={handleBlogChange}
            value={newBlog.author}
        />
        <br />      
        <input
            type='text'
            name='url'
            placeholder='Url'
            onChange={handleBlogChange}
            value={newBlog.url}
        />
        <br />
        <button type='submit'>Add</button>
        </form>
    </>
  );
};

export default NewBlogs;
