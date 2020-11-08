import React, { useState, useRef } from 'react';
import Button from 'components/Shared/Button';

function VariantSlideup({ closeSlideup }) {
  const [selectedVariant, setSelectedVariant] = useState(null);

  const backgroundRef = useRef();
  const hideSlideup = (e) => {
    if (e.target === backgroundRef.current) closeSlideup();
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
          <img
            src="http://via.placeholder.com/150"
            className="w-8 h-8 object-contain"
            alt="Shampoo"
          />
          <div>Shampoo</div>
        </div>

        <div className="my-2">
          {[
            'For top load washer',
            'Example abc',
            'For front load washer',
            'Example def',
          ]
            .map((n, i) => ({
              id: i,
              name: n,
            }))
            .map((variant) =>
              selectedVariant?.id === variant.id ? (
                <button
                  className="text-purple border border-gray-300 bg-gray-300 rounded-full px-3 py-2 inline-block mr-3 mb-3"
                  onClick={() => setSelectedVariant(null)}
                >
                  {variant.name}
                </button>
              ) : (
                <button
                  className="text-purple border border-purple rounded-full px-3 py-2 inline-block opacity-50 mr-3 mb-3"
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant.name}
                </button>
              ),
            )}
        </div>

        <Button>Save</Button>
      </div>
    </div>
  );
}

export default VariantSlideup;
