import React from 'react';
import styles from '../styles/product.css';

const ProductForm = ({ formData, onSubmit, onInputChange }) => {
  return (
    <form className={styles.productForm} onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}>
      <label>
        Product Name:
        <input
          className={styles.inputField}
          type="text"
          value={formData.name}
          onChange={(e) => onInputChange('name', e.target.value)}
        />
      </label>
      <label>
        Product Price:
        <input
          className={styles.inputField}
          type="text"
          value={formData.price}
          onChange={(e) => onInputChange('price', e.target.value)}
        />
      </label>
      <button className={styles.submitButton} type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
