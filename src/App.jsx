import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CSVGenerator from './components/CSVGenerator';
import './style/App.css';
import { Button, Grid } from '@mui/material';

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

  const removeProduct = (removedProduct) => {
    setProducts(products.filter((product) => product.id !== removedProduct.id))
  }

  return (
    <div className="container">
      <div className="title">
        <h2>Gerador de Produtos 9.000</h2>
      </div>
      <Grid>
        {isAdding ? (
          <ProductForm
            addProduct={addProduct}
            setIsAdding={setIsAdding}
            editProduct={editProduct}
            productToEdit={productToEdit}
          />
        ) : (
          <Grid >
            <ProductList removeProduct={removeProduct} products={products} setIsAdding={setIsAdding} setProductToEdit={setProductToEdit} />
            <Grid container alignItems="center" gap={1}>
              <Button variant="contained" onClick={() => { setIsAdding(true); setProductToEdit(null); }}>Add Product</Button>
              <CSVGenerator products={products} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default App;
