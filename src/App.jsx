import { useEffect, useState } from "react";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import Notification from "./components/Notification";
import User from "./components/User";
import NewBlogs from "./components/NewBlogs";

function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [message, setMessage] = useState(null);
  const [blogs, setBlogs] = useState(null);


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
          <Blogs blogs={blogs} setBlogs={setBlogs} userLogged={userLogged} setMessage={setMessage} />
          <br />
          <NewBlogs userLogged={userLogged} setMessage={setMessage} setBlogs={setBlogs} />
        </>
      ) : (
        <Login setUserLogged={setUserLogged} setMessage={setMessage} />
      )}
    </>
  );
}

export default App;
