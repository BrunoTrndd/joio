import React from 'react';
import '../style/App.css';

const ProductList = ({ products, setIsAdding, setProductToEdit }) => {
  return (
    <div>
      <div className="inner-container">
        <table className="table">
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                <td>{product.id}</td>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>
                  <button onClick={() => { setIsAdding(true); setProductToEdit(product); }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
