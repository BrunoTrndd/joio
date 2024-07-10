import React from 'react';
import '../style/App.css';

const ProductFields = ({ product, handleChange }) => {
  return (
    <div className="horizontal-fields">
      <div>
        <input placeholder='ID' type="text" name="id" value={product.id} onChange={handleChange} required />
      </div>
      <div>
        <input placeholder='Código' type="text" name="code" value={product.code} onChange={handleChange} required />
      </div>
      <div>
        <input placeholder='Nome' type="text" name="name" value={product.name} onChange={handleChange} required />
      </div>
    </div>
  );
};

export default ProductFields;
