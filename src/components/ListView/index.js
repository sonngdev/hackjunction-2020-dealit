import React, { useState, useEffect } from 'react';
import { getSuggestions, getListProducts } from 'utils/request.mock';
import Suggestion from './Suggestion';
import PersonalList from './PersonalList';

function ListView() {
  const [suggestions, setSuggestions] = useState([]);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const request = async () => {
      const suggestions = await getSuggestions();
      setSuggestions(suggestions);
    };

    request();
  }, []);

  useEffect(() => {
    const request = async () => {
      const lps = await getListProducts();
      setListProducts(lps);
    };

    request();
  }, []);

  return (
    <div>
      I&apos;m in need of...
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} suggestion={suggestion} />
      ))}
      <PersonalList listProducts={listProducts} />
    </div>
  );
}

export default ListView;
