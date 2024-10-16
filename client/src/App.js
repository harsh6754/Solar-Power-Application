import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepages';
import './index.css';
import LoadingPage from './LoadingPage';
import About from './FooterPages/About';
import Blogs from './FooterPages/Blogs';
import BrandCenter from './FooterPages/BrandCenter';
import Careers from './FooterPages/Careers';

function App() {
  return (
    <div>
       <Routes>
           {/* Pages Routing */}
           <Route path="/" element={<LoadingPage/>}/>
           <Route path="/main" element={<Homepage/>}/>



           {/* Footer Page Routing */}
           <Route path="/about" element={<About/>}/>
           <Route path='/blogs' element={<Blogs/>}/>
           <Route path='/Brand' element={<BrandCenter/>}/>
           <Route path='/career' element={<Careers/>}/>
       </Routes>
    </div>
  );
}

export default App;
