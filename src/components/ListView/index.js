import React, { useState, useEffect } from 'react';
import { getListProducts } from 'utils/request.mock';
import Header from './Header';
import SuggestionSlideup from './SuggestionSlideup';
import PersonalList from './PersonalList';
import svgBackground from 'assets/images/background.svg';

function ListView() {
  const [showSuggestionSlideup, setShowSuggestionSlideup] = useState(false);
  const [listProducts, setListProducts] = useState([]);

  const showSlideup = () => setShowSuggestionSlideup(true);

  useEffect(() => {
    const request = async () => {
      const lps = await getListProducts();
      setListProducts(lps);
    };

    request();
  }, []);

  return (
    <div
      className="h-screen flex flex-col"
      style={{ backgroundImage: `url(${svgBackground})` }}
    >
      <Header />

      <div className="bg-pearl rounded-t-4xl flex-1 px-4 py-8">
        <div className="flex items-center">
          <span className="font-bold text-xl mr-3">
            I&apos;m in need of ...
          </span>
          <button
            type="button"
            onClick={showSlideup}
            className="bg-purple rounded-full w-8 h-8 inline-flex justify-center items-center"
          >
            <span
              className="block text-white text-2xl font-light"
              style={{ position: 'relative', top: -2, left: -1 }}
            >
              +
            </span>
          </button>
        </div>
        {showSuggestionSlideup && <SuggestionSlideup />}
        <PersonalList listProducts={listProducts} />
      </div>
    </div>
  );
}

export default ListView;
