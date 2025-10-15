import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MixtapeProvider } from './context/MixtapeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MixtapeProvider>
      <App />
    </MixtapeProvider>
  </React.StrictMode>
);