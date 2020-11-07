import React from 'react';
import { Provider } from 'react-redux';
import ListView from './ListView';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <ListView />
    </Provider>
  );
}

export default App;
