import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './component/Header';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
