import React from 'react';
import ListProduct from './ListProduct';

function PersonalList({ listProducts }) {
  return (
    <div className="mt-6">
      {listProducts.map((listProduct) => (
        <ListProduct key={listProduct.id} listProduct={listProduct} />
      ))}
    </div>
  );
}

export default PersonalList;
