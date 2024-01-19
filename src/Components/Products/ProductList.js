import React from "react";

const ProductList = ({ products, onDeleteProduct }) => {
  const calculateTotalValue = () => {
    if (!products || products.length === 0) {
      return 0;
    }

    return products.reduce(
      (total, product) => total + parseFloat(product.sellingPrice),
      0
    );
  };

  const handleDelete = (productId) => {
    // Call the onDeleteProduct function from the parent component
    onDeleteProduct(productId);
  };

  return (
    <div>
      <h2>Products</h2>
      {products && products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.sellingPrice} - {product.name}{" "}
              <button onClick={() => handleDelete(product.productId)}>
                Delete Product
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
      <p>Total Value Worth of products: ${calculateTotalValue().toFixed(2)}</p>
    </div>
  );
};

export default ProductList;
