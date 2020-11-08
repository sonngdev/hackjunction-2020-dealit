import React from 'react';

function ListProduct({ listProduct }) {
  const { imageUrl, name, variants } = listProduct.product;

  return (
    <div className="bg-white rounded-lg flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src={imageUrl} className="w-8 h-8 object-contain" alt={name} />
        <div>{name}</div>
      </div>

      {variants && variants.length && (
        <button className="text-purple text-sm">Select variants</button>
      )}
    </div>
  );
}

export default ListProduct;
