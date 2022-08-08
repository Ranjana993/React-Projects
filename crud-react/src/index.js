import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, } from 'react-router-dom';
import App from './App';
import { AppProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AppProvider>


);