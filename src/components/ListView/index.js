import React, { useState, useEffect } from "react";
import { getSuggestions } from "utils/request.mock";
import Suggestion from "./Suggestion";

function ListView() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (suggestions.length) return;

    const request = async () => {
      const suggestions = await getSuggestions();
      setSuggestions(suggestions);
    };

    request();
  }, [suggestions]);

  return (
    <div>
      I&apos;m in need of...
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} suggestion={suggestion} />
      ))}
    </div>
  );
}

export default ListView;
