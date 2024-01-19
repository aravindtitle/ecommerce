import React, { useState, useEffect } from "react";
import ProductsForm from "./ProductsForm";
import ProductList from "./ProductList";

const EcommercePage = () => {
  // Initialize products with an empty array
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
  };

  // Save products to local storage
  const saveProductsToLocalStorage = (updatedProducts) => {
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <h1>Ecommerce Page</h1>
      <ProductsForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
};

export default EcommercePage;
