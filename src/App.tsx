// Webdev A1.2.3 Creating The Labs Component: App React.js Component - Root Entry to node.js application 

import React from 'react';
//import logo from './logo.svg';
import Labs from './Labs'
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <HashRouter>
    <div>
    <Routes>
    <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
