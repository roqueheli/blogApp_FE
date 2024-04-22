import React, { useEffect } from "react";
import reviews from "../../services/blogs";

const Blogs = ({ blogs, setBlogs, userLogged, setMessage }) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const blogs = await reviews.getAllById(userLogged.token, userLogged.id);
        setBlogs(blogs);
      } catch (error) {
        setMessage(`error: ${error}`);
      };
    };
    fetchData();
  }, []);

  return (
    userLogged &&
    <>
      {blogs?.map((blog) => (
        <li key={blog.id}>
          {`${blog.tittle} ${blog.author}`}{" "}
          {/* <button type="button">
            delete
          </button> */}
        </li>
      ))}
    </>
  );
};

export default Blogs;
