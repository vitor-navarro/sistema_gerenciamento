import React from 'react';
import styled from 'styled-components';

const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  & > div {
    margin-bottom: 20px;
  }

  & > div > label {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  & > div > input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
  }
`;

const ProductForm = () => {
  return (
    <ProductForm>
      <div>
        <label>Nome do produto</label>
        <input type="text" placeholder="Nome do produto" />
      </div>
      <div>
        <label>Valor Custo</label>
        <input type="text" placeholder="Valor custo" />
      </div>
      <div>
        <label>Descrição do produto</label>
        <input type="text" placeholder="Descrição do produto" />
      </div>
    </ProductForm>
  );
};

export default ProductForm;