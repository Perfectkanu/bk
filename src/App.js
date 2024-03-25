import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PackageInfo from './pages/PackageInfo';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  // const isAuthenticated = () => {
  //   const token = sessionStorage.getItem('token');

  //   if (token) {
  //     const decodedToken = decodeToken(token);
  //     const currentTime = Date.now() / 1000;
  //     return decodedToken && decodedToken.exp > currentTime;
  //   }

  //   return false;
  // };

  // const decodeToken = (token) => {
  //   try {
  //     return JSON.parse(atob(token.split('.')[1]));
  //   } catch (error) {
  //     return null;
  //   }
  // };

  const showHeaderAndFooter = !['/login', '/signup', '/dashboard'].includes(window.location.pathname);

  return (
    <div>
      {showHeaderAndFooter && <Header />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/packageinfo" element={<PackageInfo />} />
        </Routes>
      </Router>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
