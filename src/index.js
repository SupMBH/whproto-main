import React from 'react';
import ReactDOM from 'react-dom/client'; // Remplacer par la nouvelle importation
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // Créer un root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);
