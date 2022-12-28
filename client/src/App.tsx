import React, { useState } from 'react';
import { Routes, Route, Form } from 'react-router-dom';

import Header from './components/Header';
import AuthContext from './context/AuthContext';

import Home from './pages/Home/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Film from './pages/Film';

const App: React.FC = () => {
  return (
    <AuthContext.Provider value={{ uuid: localStorage.getItem('uuid') }}>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
