import axios from 'axios';

const baseUrl = 'http://localhost:3000';
const token = localStorage.getItem('jwt');

const api = axios.create({
  baseURL: baseUrl
})

// export const getToken = () => {
//   const token = localStorage.getItem('jwt');
//   api.defaults.headers.common.authorization = `Bearer ${token}`;
// }

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  console.log(resp);
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  return resp.data;
}

const createProduct = async (data) => {
  // getToken();
  const resp = await api.post('/products', { product: data });
  return resp.data;
}

const readAllProducts = async () => {
  const resp = await api.get('/products');
  return resp.data;
}

const updateProduct = async (id, data) => {
  // getToken();
  const resp = await api.put(`/products/${id}`, { product: data });
  return resp.data;
}

const destroyProduct = async (id) => {
  // getToken();
  const resp = await api.delete(`/products/${id}`);
  return resp.data;
}

export {
  createProduct,
  readAllProducts,
  updateProduct,
  destroyProduct
}