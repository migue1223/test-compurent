import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

export const Navbar = () => {
  const { logged, logOut } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    history.replace('/albunes');
    logOut();
    localStorage.removeItem('token');
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/albunes'>
        Music Radio
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/albunes'
          >
            Álbunes
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
        <ul className='navbar-nav ml-auto'>
          {logged && <span className='nav-item nav-link text-info'>User</span>}

          {logged && (
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/carrito'
            >
              Carrito
            </NavLink>
          )}

          {logged && (
            <button onClick={handleLogout} className='nav-item nav-link btn'>
              Logout
            </button>
          )}

          {!logged && (
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/login'
            >
              Login
            </NavLink>
          )}
        </ul>
      </div>
    </nav>
  );
};
