import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(process.env.REACT_APP_SERVER_HOST);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
