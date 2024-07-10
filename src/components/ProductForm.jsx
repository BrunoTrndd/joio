import React, { useState, useEffect } from 'react';
import ProductFields from './ProductFields';
import '../style/App.css';

const categories = [
  { value: 'Camisa', label: 'Camisa' },
  { value: 'Caneca', label: 'Caneca' },
  { value: 'EcoBag', label: 'EcoBag' },
  { value: 'RoupaPet', label: 'Roupa Pet' },
];

const malhaOptions = ['Economica', 'Padrão', 'Prime'];
const corOptions = [
  'Branco', 'Amarelo canário', 'Amarelo outro', 'Laranja', 'Vermelho',
  'Vinho', 'Rosa pink', 'Rosa bebê', 'Roxo', 'Azul royal', 'Azul marinho',
  'Azul turquesa', 'Verde bandeira', 'Verde musgo', 'Cinza mescla'
];
const tamanhoOptions = ['P', 'M', 'G', 'GG', 'XGG'];

const ProductForm = ({ addProduct, setIsAdding, editProduct, productToEdit }) => {
  const [product, setProduct] = useState({
    id: '',
    code: '',
    name: '',
    category: '',
    tags: [],
    malha: [],
    cor: [],
    tamanho: [],
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleCheckboxChange = (name, value) => {
    setProduct((prevProduct) => {
      const currentValues = prevProduct[name];
      if (currentValues.includes(value)) {
        return { ...prevProduct, [name]: currentValues.filter((v) => v !== value) };
      } else {
        return { ...prevProduct, [name]: [...currentValues, value] };
      }
    });
  };

  const handleSelectAll = (name, options) => {
    setProduct((prevProduct) => {
      if (prevProduct[name].length === options.length) {
        return { ...prevProduct, [name]: [] };
      } else {
        return { ...prevProduct, [name]: options };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToEdit) {
      editProduct(product);
    } else {
      addProduct(product);
    }
    setIsAdding(false);
  };

  return (
    <div className='inner-container'>
      <form onSubmit={handleSubmit} className="form">
        <div className='inner-left-fields'>
          <ProductFields product={product} handleChange={handleChange} />
          <label>Category:</label>
          <select name="category" value={product.category} onChange={handleChange} required>
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
        <div className='inner-right-fields'>
          {product.category === 'Camisa' && (
            <>
              <div className="checkbox-group">
                <label>Malha:</label>
                <input
                  type="checkbox"
                  onChange={() => handleSelectAll('malha', malhaOptions)}
                  checked={product.malha.length === malhaOptions.length}
                />
                <span>Select All</span>
                {malhaOptions.map((option) => (
                  <div key={option} className="checkbox-item">
                    <input
                      type="checkbox"
                      name="malha"
                      value={option}
                      checked={product.malha.includes(option)}
                      onChange={() => handleCheckboxChange('malha', option)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
              <div className="checkbox-group">
                <label>Cor:</label>
                <input
                  type="checkbox"
                  onChange={() => handleSelectAll('cor', corOptions)}
                  checked={product.cor.length === corOptions.length}
                />
                <span>Select All</span>
                {corOptions.map((option) => (
                  <div key={option} className="checkbox-item">
                    <input
                      type="checkbox"
                      name="cor"
                      value={option}
                      checked={product.cor.includes(option)}
                      onChange={() => handleCheckboxChange('cor', option)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
              <div className="checkbox-group">
                <label>Tamanho:</label>
                <input
                  type="checkbox"
                  onChange={() => handleSelectAll('tamanho', tamanhoOptions)}
                  checked={product.tamanho.length === tamanhoOptions.length}
                />
                <span>Select All</span>
                {tamanhoOptions.map((option) => (
                  <div key={option} className="checkbox-item">
                    <input
                      type="checkbox"
                      name="tamanho"
                      value={option}
                      checked={product.tamanho.includes(option)}
                      onChange={() => handleCheckboxChange('tamanho', option)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="form-buttons">
          <button type="button" onClick={() => setIsAdding(false)}>Back</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
