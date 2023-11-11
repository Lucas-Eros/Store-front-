import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de importar o Axios
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ProductController = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const submitForm = async () => {
    try {
      await axios.post('http://localhost:4000/products', formData);
      setFormData({ name: '', price: '' });
      fetchData();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/products/${productId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="container">
      <h1>Product CRUD</h1>
      <ProductForm
        formData={formData}
        onSubmit={submitForm}
        onInputChange={handleInputChange}
      />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default ProductController;
