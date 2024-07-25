import React, { useState, useEffect } from 'react';
import ProductFields from './ProductFields';
import '../style/App.css';
import { Autocomplete, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

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
const tagsOptions = ['Masculino', 'Anime']

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
  const [tags, setTags] = useState("")

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
      setTags(productToEdit.tags)
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

  const onChangeTags = (evt, newVal) => {
    setTags(newVal)
    setProduct((prevProduct) => ({ ...prevProduct, tags: newVal }));
  }

  return (
    <Grid width="1000px" height="600px" border="1px solid #cccccc" borderRadius="4px" pt={1} px={2}>
      <form onSubmit={handleSubmit} className="form">
        <Grid container width="100%" alignItems='center' justifyContent="center" direction='column'>
          <Grid width="100%">
            <ProductFields product={product} handleChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container gap={2} wrap='nowrap'>
          <Grid item xs={3}>
            <Grid>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  label="Category"
                  size='small'
                  labelId="category-select-label"
                  value={product.category}
                  onChange={handleChange}
                  name="category"
                  required
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat.value} value={cat.value} label>{cat.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid mt={1}>
              <FormControl fullWidth>
                <Autocomplete
                  onChange={onChangeTags}
                  value={tags.length > 0 ? tags : []}
                  multiple
                  id="tags-standard"
                  options={tagsOptions}
                  getOptionLabel={(option) => option}
                  defaultValue={[]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size='small'
                      variant="outlined"
                      label="Tags"
                      placeholder="Tags"
                    />
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container direction="row" justifyContent="space-between" width="100%" >
              {product.category === 'Camisa' && (
                <Grid border="1px solid #cccccc" borderRadius="4px" p={2}>

                  <Grid display='flex' flexDirection="row" width="100%" >
                    <Grid item xs={3} display='flex' flexDirection='column'>
                      <label>Malha: </label>
                      <Grid>
                        <FormControlLabel
                          control={
                            <Checkbox
                              size='small'
                              name="cor"
                              onChange={() => handleSelectAll('malha', malhaOptions)}
                              checked={product.malha.length === malhaOptions.length} />
                          }
                          label="Select All"
                        />
                      </Grid>
                      {malhaOptions.map((option) => (
                        <Grid item xs={1} key={option}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                size='small'
                                name="malha"
                                value={option}
                                checked={product.malha.includes(option)}
                                onChange={() => handleCheckboxChange('malha', option)}
                              />
                            }
                            label={option}
                            sx={{ textWrap: 'nowrap' }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                    <Grid container width="100%">
                      <label>Cor:</label>
                      <Grid container columns={4} columnSpacing={1}>
                        <Grid item xs={1}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                size='small'
                                name="cor"
                                onChange={() => handleSelectAll('cor', corOptions)}
                                checked={product.cor.length === corOptions.length} />
                            }
                            label="Select All"
                          />
                        </Grid>
                        {corOptions.map((option) => (
                          <Grid item xs={1} key={option}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size='small'
                                  name="cor"
                                  value={option}
                                  checked={product.cor.includes(option)}
                                  onChange={() => handleCheckboxChange('cor', option)}
                                />
                              }
                              label={option}
                              sx={{ textWrap: 'nowrap' }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid>
                    <Typography>Tamanho:</Typography>
                    <Grid container columns={2} mt={2}>
                      <Grid item xs={1}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              size='small'
                              name="cor"
                              onChange={() => handleSelectAll('tamanho', tamanhoOptions)}
                              checked={product.tamanho.length === tamanhoOptions.length} />
                          }
                          label="Select All"
                        />
                      </Grid>
                      {tamanhoOptions.map((option) => (
                        <Grid item xs={1}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                size='small'
                                name="tamanho"
                                value={option}
                                checked={product.tamanho.includes(option)}
                                onChange={() => handleCheckboxChange('tamanho', option)} />
                            }
                            label={option}
                          />
                        </Grid>
                      ))}
                    </Grid>


                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>



        <div className="form-buttons">
          <button type="button" onClick={() => setIsAdding(false)}>Back</button>
          <button type="submit">Save</button>
        </div>
      </form >
    </Grid >
  );
};

export default ProductForm;
