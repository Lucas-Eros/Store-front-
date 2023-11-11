import React from 'react';
import styles from '../styles/product.css';

const ProductList = ({ products, onDelete }) => {
  return (
    <ul className={styles.shoppingList}>
      {products.map((product) => (
        <li key={product._id} className={styles.shoppingListItem}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productPrice}>${product.price}</div>
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(product._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
