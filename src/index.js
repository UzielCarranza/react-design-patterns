import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const root2 = ReactDOM.createRoot(document.getElementById('list'));
root2.render(
    <App2></App2>
)