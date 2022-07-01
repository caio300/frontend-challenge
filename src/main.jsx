import React from 'react';
import ReactDOM from 'react-dom/client';

import Provider from './components/context/Provider';
import App from './App';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
