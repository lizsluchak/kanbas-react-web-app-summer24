// Webdev A1.2.3 Creating The Labs Component: App React.js Component - Root Entry to node.js application 

import React from 'react';
//import logo from './logo.svg';
import Labs from './Labs'
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (

    <><div>
      <h1>Welcome to Web Dev</h1>
      <h2>Liz Sluchak</h2>
    </div>
    
    
    <HashRouter>
        <div>
          <Routes>

            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />


          </Routes>
        </div>
      </HashRouter></>
  );
}

export default App;
