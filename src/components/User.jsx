import React from 'react';

const User = ({ userLogged, setUserLogged }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem('loggedBlogUser');
    setUserLogged(null);
  };

  return <div>{`${userLogged.name} logged in`} <button onClick={handleLogout}>Logout</button></div>
};

export default User;
