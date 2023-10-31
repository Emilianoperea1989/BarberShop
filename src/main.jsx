import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactModal from 'react-modal'; // Asegúrate de importar ReactModal

const appRoot = document.getElementById('root');
ReactModal.setAppElement(appRoot); // Configura el elemento raíz de la aplicación

ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);