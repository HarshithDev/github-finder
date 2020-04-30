import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const navbar = ({ icon, title }) => {
  return (
    <nav className='navbar'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github',
};

navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default navbar;
