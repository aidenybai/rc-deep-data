import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreContext, useStore, createStore } from './store';
import FruitList from './components/FruitList';

const initialState = {
  fruits: [
    { name: 'Apple', type: 'Pome' },
    { name: 'Banana', type: 'Berry' },
    { name: 'Orange', type: 'Citrus' },
    { name: 'Pear', type: 'Pome' },
    { name: 'Grape', type: 'Berry' },
  ],
  filter: 'All',
};

const App = () => {
  const store = createStore(initialState);

  return (
    <StoreContext.Provider value={store}>
      <FruitList />
    </StoreContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
