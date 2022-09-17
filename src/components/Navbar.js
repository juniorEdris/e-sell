import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link' aria-current='page'>
                New Releases
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Men
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Women
              </Link>
            </li>
            <li className='nav-item dropdown active'>
              <Link
                to='/'
                className='nav-link dropdown-toggle'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Kids
              </Link>
              <ul className='dropdown-menu'>
                <li>
                  <Link to='/' className='dropdown-item'>
                    Option 1
                  </Link>
                </li>
                <li>
                  <Link to='/' className='dropdown-item'>
                    Option 2
                  </Link>
                </li>
                <li>
                  <Link to='/' className='dropdown-item'>
                    Option 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Sale
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Collections
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
