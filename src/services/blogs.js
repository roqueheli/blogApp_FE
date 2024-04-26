import axios from 'axios';

const getAllById = async (token, id) => await axios
  .get(`${import.meta.env.VITE_BLOGS_URL}/users/${id}`, { headers: { Authorization: token } });

const create = async (token, newObject) => await axios
  .post(import.meta.env.VITE_BLOGS_URL, newObject, { headers: { Authorization: token }, });

const update = async (token, id, newObject) => await axios
  .put(`${import.meta.env.VITE_BLOGS_URL}/${id}`, newObject, { headers: { Authorization: token } });

const eliminate = async (token, id) => await axios
  .delete(`${import.meta.env.VITE_BLOGS_URL}/${id}`, { headers: { Authorization: token }, });

export default { getAllById, create, update, eliminate };
