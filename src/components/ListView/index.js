import React, { useState, useEffect } from 'react';
import { getListProducts } from 'utils/request.mock';
import Header from './Header';
import SuggestionModal from './SuggestionModal';
import PersonalList from './PersonalList';

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
    <div>
      <div>
        <Header />
      </div>

      <div>
        I&apos;m in need of
        <button type="button" onClick={showModal}>
          +
        </button>
        {showSuggestionModal && <SuggestionModal />}
        <PersonalList listProducts={listProducts} />
      </div>
    </div>
  );
}

export default ListView;
