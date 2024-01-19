import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const ProductsForm = ({ onAddProduct }) => {
  const [productid, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const productHandler = (event) => {
    setProductId(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const addProductHandler = (event) => {
    // Prevent the default form submission to avoid page reload
    event.preventDefault();

    // Create a product object
    const newProduct = {
      productId: productid,
      sellingPrice: price,
      name: name,
    };

    // Pass the product to the parent component
    onAddProduct(newProduct);

    // Clear input fields after adding the product
    setProductId("");
    setPrice("");
    setName("");
  };
  return (
    <Card>
      <form onSubmit={addProductHandler}>
        <label>Product Id:</label>
        <input
          type="number"
          name="productid"
          value={productid}
          onChange={productHandler}
        />
        <label>Selling Price:</label>
        <input
          type="number"
          name="selling price"
          value={price}
          onChange={priceHandler}
        />
        <label>Product Name:</label>
        <input type="input" name="name" value={name} onChange={nameHandler} />
        <Button>Add Product.</Button>
      </form>
    </Card>
  );
};

export default ProductsForm;
