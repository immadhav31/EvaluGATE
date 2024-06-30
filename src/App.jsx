import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import Login from './sections/Login/Login';
import Signup from './sections/Signup/Signup';
import Admin from './sections/Admin/Admin';
import Test from './sections/Test/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;