import React, { useState } from 'react';
import userService from '../services/login';

const Login = ({ setUserLogged, setMessage }) => {
  const initValues = { username: '', password: '' };
  const [loginValues, setLoginValues] = useState(initValues);

  const handleUserChange = (e) => {
    e.preventDefault();
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await userService.login(loginValues);
      setUserLogged(user.data);
      window.localStorage.setItem('loggedBlogUser', JSON.stringify(user.data));
      setLoginValues(initValues);
    } catch (error) {
      setMessage(`error: wrong user or password`);
      setLoginValues(initValues);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleUserChange}
          value={loginValues.username}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleUserChange}
          value={loginValues.password}
        />
        <br />
        <button onClick={handleLogin} type='submit'>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
