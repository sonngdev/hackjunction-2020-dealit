import React from 'react';

function ListProduct({
  listProduct,
  setVaryingListProduct,
  openVariantSlideup,
}) {
  const { imageUrl, name, variants } = listProduct.product;

  const showVariantSlideup = () => {
    setVaryingListProduct(listProduct);
    openVariantSlideup();
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={imageUrl} className="w-8 h-8 object-contain" alt={name} />
          <div>{name}</div>
        </div>

        {variants && variants.length && (
          <button className="text-purple text-sm" onClick={showVariantSlideup}>
            Select variants
          </button>
        )}
      </div>

      <div className="ml-8">
        {variants
          .filter((v) => v.selected)
          .map((v) => (
            <div
              key={v.id}
              className="px-3 py-1 bg-gray-300 rounded-full mr-2 mt-2 text-xs inline-block text-purple"
            >
              {v.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListProduct;
