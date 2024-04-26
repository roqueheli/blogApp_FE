import { useEffect, useRef, useState } from "react";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import Notification from "./components/Notification";
import User from "./components/User";
import NewBlogs from "./components/NewBlogs";
import Togglable from "./components/Togglable";

function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [message, setMessage] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const newBlogsRef = useRef();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUserLogged(user);
    }
  }, []);

  return (
    <>
      <h1>Blogs</h1>
      <Notification message={message} setMessage={setMessage} />
      {userLogged ? (
        <>
          <User userLogged={userLogged} setUserLogged={setUserLogged} />
          <br />
          <Togglable buttonLabel={'new note'} ref={newBlogsRef}>
            <NewBlogs userLogged={userLogged} setMessage={setMessage} setBlogs={setBlogs} newBlogsRef={newBlogsRef} />
          </Togglable>
          <br />
          <Blogs blogs={blogs} setBlogs={setBlogs} userLogged={userLogged} setMessage={setMessage} />
        </>
      ) : (
        <Togglable buttonLabel={'login'}>
          <Login setUserLogged={setUserLogged} setMessage={setMessage} />
        </Togglable>
      )}
    </>
  );
}

export default App;
