import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepages';
import './index.css';
import LoadingPage from './LoadingPage';
import About from './FooterPages/About';

function App() {
  return (
    <div>
       <Routes>
           <Route path="/" element={<LoadingPage/>}/>
           <Route path="/main" element={<Homepage/>}/>
           <Route path="/about" element={<About/>}/>
       </Routes>
    </div>
  );
}

export default App;
