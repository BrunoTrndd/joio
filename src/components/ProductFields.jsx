import React from 'react';
import '../style/App.css';
import { Grid, TextField } from '@mui/material';

const ProductFields = ({ product, handleChange }) => {
  return (
    <Grid container direction="row" justifyContent="space-between" wrap='nowrap' gap={1}>
      <Grid item xs={4}>
        <TextField variant="outlined" fullWidth size='small' label='ID' type="text" name="id" value={product.id} onChange={handleChange} required />
      </Grid>
      <Grid item xs={4}>
        <TextField variant="outlined" fullWidth size='small' label='Código' type="text" name="code" value={product.code} onChange={handleChange} required />
      </Grid>
      <Grid item xs={8}>
        <TextField variant="outlined" fullWidth size='small' label='Nome' type="text" name="name" value={product.name} onChange={handleChange} required />
      </Grid>
    </Grid>
  );
};

export default ProductFields;
