import React, { useRef } from 'react';
import Button from 'components/Shared/Button';

function VariantSlideup({ closeSlideup }) {
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
        <Button>Save</Button>
      </div>
    </div>
  );
}

export default VariantSlideup;
