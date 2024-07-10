import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CSVGenerator from './components/CSVGenerator';
import './style/App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <div className="container">
      <div className="title">
        <h2>Gerador de Produtos 9.000</h2>
      </div>
      <div>
        {isAdding ? (
          <ProductForm
          addProduct={addProduct}
          setIsAdding={setIsAdding}
          editProduct={editProduct}
          productToEdit={productToEdit}
          />
          ) : (
            <>
              <ProductList products={products} setIsAdding={setIsAdding} setProductToEdit={setProductToEdit} />
              <button onClick={() => { setIsAdding(true); setProductToEdit(null); }}>Add Product</button>
              <CSVGenerator products={products} />
            </>
        )}
      </div>
    </div>
  );
};

export default App;
