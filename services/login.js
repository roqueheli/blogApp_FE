import axios from 'axios';

const login = async (loginObject) => await axios.post(import.meta.env.VITE_LOGIN_URL, loginObject);

export default { login };
