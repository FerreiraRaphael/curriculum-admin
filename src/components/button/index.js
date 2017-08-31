import React from "react";
import Proptypes from "prop-types";

const Button = ({ block, size, styled, loading, text, disabled, ...rest }) => {
  const classes = `${block ? "btn-block" : ""} 
    ${size ? `btn-${size}` : ""} 
    ${styled ? `btn-${styled}` : ""}`;

  return (
    <button
      className={`btn ${classes}`}
      {...rest}
      disabled={disabled || loading}
    >
      {loading ? <i className="fa fa-circle-o-notch fa-spin" /> : null}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: Proptypes.string,
  type: Proptypes.string,
  id: Proptypes.string,
  onClick: Proptypes.func,
  disabled: Proptypes.bool,
  block: Proptypes.bool,
  size: Proptypes.string,
  styled: Proptypes.string,
  loading: Proptypes.bool
};

export default Button;
