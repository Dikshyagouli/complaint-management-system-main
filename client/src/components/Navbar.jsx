import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ language, setLanguage, mode, setMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} shadow-sm fixed-top`}>
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img src="/src/assets/logo.png" alt="Logo" className="navbar-logo" style={{ width: '130px', height: '90px' }}/>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarCollapse"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarCollapse">
            {/* Left Side - Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className={`dropdown-menu dropdown-menu-${mode}`}>
                  <li>
                    <Link className="dropdown-item" to="/public-form" onClick={closeMenu}>
                      Submit Complaint
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/track" onClick={closeMenu}>
                      Track Progress
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq" onClick={closeMenu}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services" onClick={closeMenu}>
                      All Services
                    </Link>
                  </li>
                </ul>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${isActive('/form') ? 'active' : ''}`} 
                    to="/public-form"
                    onClick={closeMenu}
                  >
                    Submit Complaint
                  </Link>
                </li>
              )}
            </ul>

            {/* Right Side - Auth & Settings */}
            <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
              {/* Authentication */}
              {isAuthenticated ? (
                <div className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle d-flex align-items-center" 
                    href="#" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                  >
                    <span className="user-welcome">Welcome, {user?.name || 'User'}!</span>
                  </a>
                  <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-${mode}`}>
                    <li><Link className="dropdown-item" to="/profile" onClick={closeMenu}>Profile</Link></li>
                    {/* <li><Link className="dropdown-item" to="/dashboard" onClick={closeMenu}>Dashboard</Link></li> */}
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <Link 
                    className={`btn btn-outline-${mode === 'light' ? 'dark' : 'light'} btn-sm`}
                    to="/login"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                </div>
              )}

              {/* Language Selector */}
              <div className="nav-item dropdown">
                <button
                  className={`btn btn-outline-${mode === 'light' ? 'dark' : 'light'} btn-sm dropdown-toggle`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language}
                </button>
                <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-${mode}`}>
                  <li><button className="dropdown-item" onClick={() => handleLanguageChange('EN')}>English</button></li>
                  <li><button className="dropdown-item" onClick={() => handleLanguageChange('NE')}>नेपाली</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Marquee added below the navigation bar */}
      <div style={{
        marginTop: '80px', // Adjust this value to create space below the navbar
        padding: '8px 0',
        backgroundColor: mode === 'light' ? '#f8f9fa' : '#343a40',
        color: mode === 'light' ? '#212529' : '#fff',
        borderBottom: `1px solid ${mode === 'light' ? '#e9ecef' : '#495057'}`,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}>
        <marquee behavior="scroll" direction="left" scrollamount="5">
           🚀 Welcome to AawajKendra | 📝 Report your issues easily | 🔍 Track your complaint status anytime | 📢 Your voice matters – Raise complaints anytime | ⚡ Fast and transparent resolutions | 🤝 Together for accountability and better service!
        </marquee>
      </div>
    </>
  );
};

export default Navbar;