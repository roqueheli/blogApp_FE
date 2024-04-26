import React, { useEffect, useState } from "react";
import reviews from "../services/blogs";

const BlogsDetail = ({ blog, userLogged, setMessage }) => {
  const [view, setView] = useState(false);
  const [newLikes, setNewLikes] = useState(blog.likes);
  
  const removeStyle = {
    backgroundColor: '#0962EA',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    width: '65px',
    borderRadius: '10%',
  };

  const handleView = (e) => {
    e.preventDefault();
    setView(!view);
  };

  const handleLikes = async (e) => {
    e.preventDefault();
    try {
        const newLike = newLikes + 1;
        const blogs = await reviews.update(userLogged.token, blog.id, { likes: newLike });
        setNewLikes(blogs.data.likes);
      } catch (error) {
        setMessage(`error: cannot increase the likes counter`);
      }
  };

  const handleRemove = async (e) => {
    e.preventDefault();
    if (window.confirm(`Remove blog ${blog.tittle} by ${blog.author}`)) {
        await reviews.eliminate(userLogged.token, blog.id);
    };
  };

  return (
    <>
      <button onClick={handleView} type="button">
        {!view ? "view" : "hide"}
      </button>
      {view && (
        <>
          <p>{blog.url}</p>
          <p>{`likes ${newLikes <= blog.likes ? blog.likes : newLikes}`} <button onClick={handleLikes} type="button">like</button></p>
          <p>{blog.author}</p>
          <button style={removeStyle} onClick={handleRemove} type="button">remove</button>
        </>
      )}
    </>
  );
};

export default BlogsDetail;
