import React, { useEffect } from "react";
import '../index.css';
import reviews from "../services/blogs";
import BlogsDetail from "./BlogsDetail";

const Blogs = ({ blogs, setBlogs, userLogged, setMessage }) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const blogs = await reviews.getAllById(userLogged.token, userLogged.id);
        setBlogs(blogs.data.sort((a, b) => a.likes - b.likes));
      } catch (error) {
        setMessage(`error: ${error}`);
      };
    };
    fetchData();
  }, [blogs]);

  return (
    userLogged &&
    <ul className="list-blog">
      {blogs?.map((blog) => (
        <li className="blog-view" key={blog.id}>
          {`${blog.tittle}`}{" "}
          <BlogsDetail blog={blog} userLogged={userLogged} setMessage={setMessage} setBlogs={setBlogs} />
        </li>
      ))}
    </ul>
  );
};

export default Blogs;
