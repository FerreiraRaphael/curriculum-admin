import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NavLink = props => {
  const active = props.location.pathname === props.to;
  return (
    <li className={`${active ? "active" : ""}`}>
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

export default withRouter(NavLink);
