import React, { useState, useRef } from 'react';
import Button from 'components/Shared/Button';
import { updateListProduct } from 'utils/request.mock';

function VariantSlideup({ closeSlideup, listProduct, setListProducts }) {
  const { imageUrl, name, variants } = listProduct.product;

  const [selectedVariants, setSelectedVariants] = useState(
    variants.filter((v) => v.selected),
  );

  const backgroundRef = useRef();
  const hideSlideup = (e) => {
    if (e.target === backgroundRef.current) closeSlideup();
  };

  const saveSelectedVariants = async () => {
    const foo = await updateListProduct(
      listProduct.id,
      selectedVariants.map((v) => v.id),
    );
    setListProducts((lps) =>
      lps.map((lp) => {
        return lp.id === foo.id ? foo : lp;
      }),
    );
    closeSlideup();
  };

  return (
    <div
      className="h-screen w-screen absolute top-0 bottom-0 right-0 left-0 flex flex-col-reverse"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={hideSlideup}
      ref={backgroundRef}
    >
      <div
        className="rounded-t-4xl bottom-0 bg-pearl w-full px-4 pb-8"
        style={{ paddingTop: 8 }}
      >
        <div
          className="rounded-full w-10 h-1 m-auto mb-6"
          style={{ backgroundColor: '#CECECE' }}
        />

        <div className="flex items-center">
          <img src={imageUrl} className="w-8 h-8 object-contain" alt={name} />
          <div>{name}</div>
        </div>

        <div className="mt-2 mb-16">
          {variants.map((variant) =>
            selectedVariants.includes(variant) ? (
              <button
                key={variant.id}
                className="text-purple border border-gray-300 bg-gray-300 rounded-full px-3 py-2 inline-block mr-3 mb-3"
                onClick={() =>
                  setSelectedVariants((vs) => vs.filter((v) => v !== variant))
                }
              >
                {variant.name}
              </button>
            ) : (
              <button
                key={variant.id}
                className="text-purple border border-purple rounded-full px-3 py-2 inline-block opacity-50 mr-3 mb-3"
                onClick={() => setSelectedVariants((vs) => [...vs, variant])}
              >
                {variant.name}
              </button>
            ),
          )}
        </div>

        <Button onClick={saveSelectedVariants}>Save</Button>
      </div>
    </div>
  );
}

export default VariantSlideup;
