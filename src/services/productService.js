import axios from 'axios';

const baseURL = 'http://localhost:3001/products';

const productService = {
  getAllProducts: () => axios.get(baseURL),
  createProduct: (data) => axios.post(baseURL, data),
  deleteProduct: (id) => axios.delete(`${baseURL}/${id}`),
};

export default productService;
