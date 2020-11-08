import React from 'react';
import { ReactComponent as CheckButtonSvg } from 'assets/svgs/check-button.svg';
import { ReactComponent as PlusButtonSvg } from 'assets/svgs/plus-button.svg';

function Suggestion({ suggestion, onToggleSelect, selected }) {
  return (
    <div className="flex items-center mb-4">
      <button type="button" onClick={onToggleSelect}>
        {selected ? <CheckButtonSvg /> : <PlusButtonSvg />}
      </button>
      <img
        src={suggestion.imageUrl}
        alt={suggestion.name}
        className="w-8 h-8 object-contain ml-5"
      />
      <div>{suggestion.name}</div>
    </div>
  );
}

export default Suggestion;
