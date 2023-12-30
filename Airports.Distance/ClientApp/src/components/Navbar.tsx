import { Routes as routes } from '../config';
import type { FunctionComponent } from 'react';
import { NavLink, generatePath } from 'react-router-dom';

const Navbar: FunctionComponent = () => {
  return (
    <nav
      role="navigation"
      className="navbar"
      aria-label="main navigation"
    >
      <div className="navbar-wrapper">
        <div className="navbar-routes">
          { routes.map(({ path, title, name, params }) =>
                <NavLink
                  key={name}
                  to={generatePath(path, params)}
                  className={({ isActive }) => 'navbar-item' + (isActive ? ' is-active' : '')}
                  >
                  {title??name}
                </NavLink>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
