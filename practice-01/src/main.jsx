import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
       
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </>
);
