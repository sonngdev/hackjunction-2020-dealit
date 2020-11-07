import React, { useState, useEffect } from 'react';
import { getSuggestions } from 'utils/request.mock';
import Suggestion from './Suggestion';

function SuggestionModal() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const request = async () => {
      const suggestions = await getSuggestions();
      setSuggestions(suggestions);
    };

    request();
  }, []);

  return (
    <div>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} suggestion={suggestion} />
      ))}
    </div>
  );
}

export default SuggestionModal;
