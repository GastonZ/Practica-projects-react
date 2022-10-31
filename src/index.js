import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // los estilos son los unicos que se importan directamente
import App from './App';

// estructura :
// 1 - import
// 2 - nombre de lo que necesito
// 3 - palabra from (desde donde lo estoy importando)
// 3 - escribo la ruta de lo que necesito


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
