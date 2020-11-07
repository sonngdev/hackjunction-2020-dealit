import React, { useState, useEffect } from 'react';
import { getListProducts } from 'utils/request.mock';
import Header from './Header';
import SuggestionModal from './SuggestionModal';
import PersonalList from './PersonalList';
import svgBackground from 'assets/images/background.svg';

function ListView() {
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [listProducts, setListProducts] = useState([]);

  const showModal = () => setShowSuggestionModal(true);

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
            onClick={showModal}
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
        {showSuggestionModal && <SuggestionModal />}
        <PersonalList listProducts={listProducts} />
      </div>
    </div>
  );
}

export default ListView;
