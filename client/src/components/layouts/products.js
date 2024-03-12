import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  // Add more products here
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Render products
  const renderProducts = currentProducts.map((product) => {
    return (
      <div key={product.id}>
        <p>{product.name}</p>
      </div>
    );
  });

  // Change page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Render pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <button key={number} onClick={() => handlePageChange(number)}>
        {number}
      </button>
    );
  });

  return (
    <div>
      <h1>Product List</h1>
      {renderProducts}
      <div>
        {renderPageNumbers}
      </div>
    </div>
  );
};

export default ProductList;
