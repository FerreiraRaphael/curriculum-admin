import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          {props.brand
            ? <Link className="navbar-brand" to={props.brandLInk || "/"}>
                {props.brand}
              </Link>
            : null}
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav">
            {props.children}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  brand: PropTypes.string,
  brandLInk: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Nav;
