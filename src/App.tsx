// Webdev A1.2.3 Creating The Labs Component: App React.js Component - Root Entry to node.js application 

import React from 'react';
//import logo from './logo.svg';
import Labs from './Labs'
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    
    <HashRouter>
        <div className="h-100">
          <Routes>
            <Route path="/" element={<Navigate to="Labs/index" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
