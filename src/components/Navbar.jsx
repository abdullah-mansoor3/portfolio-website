import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EmailButton from './EmailButton';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Abdullah <span className="highlight">AI</span>
        </Link>
        
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <Link 
                to={link.path} 
                className={`nav-links ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <EmailButton 
              className="btn-primary nav-btn" 
              onClickWrapper={() => setIsOpen(false)} 
              text="abdullah.binmansoor4@gmail.com"
              subject="Project Inquiry and Strategy Call"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
