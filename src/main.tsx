import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CursorProvider } from './contexts/CursorContext';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CursorProvider>
        <App />
      </CursorProvider>
    </Provider>
  </React.StrictMode>,
);
