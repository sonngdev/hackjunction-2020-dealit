import React from 'react';
import { ReactComponent as CheckButtonSvg } from 'assets/svgs/check-button.svg';
import { ReactComponent as PlusButtonSvg } from 'assets/svgs/plus-button.svg';

function Suggestion({ suggestion, onToggleSelect, selected }) {
  return (
    <div className="flex items-center">
      <button type="button" onClick={onToggleSelect}>
        {selected ? <CheckButtonSvg /> : <PlusButtonSvg />}
      </button>
      <img
        src={suggestion.image_url}
        alt={suggestion.name}
        className="w-8 h-8 object-contain ml-5"
      />
      <span>{suggestion.name}</span>
    </div>
  );
}

export default Suggestion;
