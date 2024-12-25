import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/HomePage'; // Assuming you have a Home component
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import CommunityPage from './components/CommunityPage';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';
import Login from './components/Login'; // Assuming you have a Login component
import Register from './components/Register'; // Assuming you have a Register component
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

function AppWithRouter() {
  const location = useLocation();

  // Check if the current route is the login or register page
  const isAuthPage = location.pathname === '/Login' || location.pathname === '/Register';

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!isAuthPage && <Navbar />}
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {/* Add other routes as needed */}
      </Routes>
      
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
