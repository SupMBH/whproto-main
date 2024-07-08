import React from 'react';
import ReactDOM from 'react-dom/client'; // Remplacer par la nouvelle importation
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Créer un root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
