import React from 'react';
import { Provider } from 'react-redux';
import ListView from './ListView';
import DealView from './DealView';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      {false && <ListView />}
      <DealView />
    </Provider>
  );
}

export default App;
