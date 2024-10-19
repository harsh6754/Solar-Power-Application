import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,useLocation } from 'react-router-dom';
import App from './App';
import Chatbot from './MessageBox/msg';
import Footer from './component/Footer';
import Header from './component/Header';
import "./i18n"

const RootComponents = () =>{
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/';

  return(
    <>
      {!hideHeaderFooter && <Header/>}
      <App/>
      {!hideHeaderFooter && <Chatbot/>}
      {/* <Chatbot/> */}
      {!hideHeaderFooter && <Footer/>}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootComponents/>
    </BrowserRouter>
  </React.StrictMode>
);
