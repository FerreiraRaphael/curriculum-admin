import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = props => {
  return (
    <li className={`${props.active ? 'active' : ''}`}>
      <Link to={props.to}>
        {props.children}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default NavLink;
