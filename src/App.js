
import React, { useState } from 'react';
import { Main } from './pages/main/main';

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

function App() {
  
  return (
   <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to={"/main"} />} />
        <Route exact path="/main" element={<Main />} />
      
      </Routes>

    </Router>
  );
}

export default App;
