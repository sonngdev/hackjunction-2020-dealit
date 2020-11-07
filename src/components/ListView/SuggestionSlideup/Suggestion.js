import React from "react";

function Suggestion({ suggestion }) {
  return (
    <div>
      <button type="button">+</button>
      <img src={suggestion.image_url} alt={suggestion.name} />
      <span>{suggestion.name}</span>
      <button type="button">For top load washer</button>
      <button type="button">For front load washer</button>
    </div>
  );
}

export default Suggestion;
