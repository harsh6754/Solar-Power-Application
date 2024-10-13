import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Homepage from './component/homepage';
import './index.css';
import LoadingPage from './LoadingPage';

function App() {
  return (
    <div>
       <Routes>
           <Route path="/" element={<LoadingPage/>}/>
           <Route path="/main" element={<Homepage/>}/>
       </Routes>
    </div>
  );
}

export default App;
