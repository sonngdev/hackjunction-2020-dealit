import React, { useState, useEffect } from 'react';
import { getSuggestions } from 'utils/request.mock';
import Button from 'components/Shared/Button';
import Suggestion from './Suggestion';

function SuggestionSlideup({ onBackgroundTap }) {
  const [suggestions, setSuggestions] = useState([]);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    const request = async () => {
      const suggestions = await getSuggestions();
      setSuggestions(suggestions);
    };

    request();
  }, []);

  const suggestionSelected = (id) => selections.includes(id);
  const toggleSuggestion = (id) => () => {
    if (suggestionSelected(id)) {
      setSelections((ss) => ss.filter((s) => s !== id));
    } else {
      setSelections((ss) => [...ss, id]);
    }
  };

  return (
    <div
      className="h-screen w-screen absolute top-0 bottom-0 right-0 left-0 flex flex-col-reverse"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={onBackgroundTap}
    >
      <div
        className="rounded-t-4xl bottom-0 bg-pearl w-full px-4 pb-8"
        style={{ paddingTop: 8 }}
      >
        <div
          className="rounded-full w-10 h-1 m-auto mb-6"
          style={{ backgroundColor: '#CECECE' }}
        />
        {suggestions.map((suggestion) => (
          <Suggestion
            key={suggestion.id}
            suggestion={suggestion}
            selected={suggestionSelected(suggestion.id)}
            onToggleSelect={toggleSuggestion(suggestion.id)}
          />
        ))}
        <div className="ml-12 mt-2 mb-6 text-gray-800 text-opacity-50">
          + Add others ...
        </div>
        <Button>Save to My List</Button>
      </div>
    </div>
  );
}

export default SuggestionSlideup;
