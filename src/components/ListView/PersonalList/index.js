import React from 'react';
import ListProduct from './ListProduct';

function PersonalList({ listProducts }) {
  return (
    <div>
      {listProducts.map((listProduct) => (
        <ListProduct key={listProduct.id} listProduct={listProduct} />
      ))}
    </div>
  );
}

export default PersonalList;
