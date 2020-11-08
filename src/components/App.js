import React, { useState } from 'react';
import { Provider } from 'react-redux';
import ListView from './ListView';
import MatchView from './MatchView';
import DealView from './DealView';
import store from '../redux/store';

function App() {
  const [view, setView] = useState('list');

  return (
    <Provider store={store}>
      {view === 'list' ? (
        <ListView setView={setView} />
      ) : view === 'match' ? (
        <MatchView setView={setView} />
      ) : (
        <DealView setView={setView} />
      )}
    </Provider>
  );
}

export default App;
