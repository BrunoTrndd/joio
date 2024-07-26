import React from 'react';
import '../style/App.css';
import { Button, Grid, List, Typography } from '@mui/material';

const ProductList = ({ products, setIsAdding, setProductToEdit, removeProduct }) => {
  return (
    <Grid display="flex" flexDirection="column" width="100ch" >
      <Grid container columns={6} alignItems="center" justifyContent="space-between" px={2} flexWrap="nowrap">
        <Grid item display="flex" justifyContent="center" xs={2}><Typography variant='h6'>ID</Typography></Grid>
        <Grid item display="flex" justifyContent="center" xs={2}><Typography variant='h6'>Código</Typography></Grid>
        <Grid item display="flex" justifyContent="center" xs={2}><Typography variant='h6'>Nome</Typography></Grid>
        <Grid item display="flex" justifyContent="center" xs={2}><Typography variant='h6'>Categoria</Typography></Grid>
        <Grid item display="flex" justifyContent="center" xs={1}></Grid>
        <Grid item display="flex" justifyContent="center" xs={1}></Grid>
      </Grid>
      <List>
        {products.map((product, index) => (
          <Grid container columns={6} alignItems="center" justifyContent="space-between" px={2} sx={{ bgcolor: index % 2 === 0 ? "#cccccc" : "#ffffff" }} flexWrap="nowrap">
            <Grid item display="flex" justifyContent="center" xs={2}>
              {product.id}
            </Grid>
            <Grid item display="flex" justifyContent="center" xs={2}>
              {product.code}
            </Grid>
            <Grid item display="flex" justifyContent="center" xs={2}>
              {product.name}
            </Grid>
            <Grid item display="flex" justifyContent="center" xs={2}>
              {product.category}
            </Grid>
            <Grid item display="flex" justifyContent="center" xs={1} >
              <Button onClick={() => { setIsAdding(true); setProductToEdit(product); }}>Edit</Button>
            </Grid>
            <Grid item display="flex" justifyContent="center" xs={1} >
              <Button color="error" onClick={() => { removeProduct(product); }}>Remove</Button>
            </Grid>
          </Grid>
        ))
        }
      </List >
    </Grid >

  );
};

export default ProductList;
