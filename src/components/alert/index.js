import React from "react";
import Proptypes from "prop-types";
import cs from "classnames";

const Alert = ({ close, title, children, warning, success, info, danger }) => {
  return (
    <div
      className={`alert ${cs({
        "alert-dismissible": close,
        "alert-warning": warning,
        "alert-success": success,
        "alert-info": info,
        "alert-danger": danger
      })}`}
    >
      {close &&
        <button type="button" className="close" data-dismiss="alert">
          &times;
        </button>}
      {title &&
        <h4>
          {title}
        </h4>}
      {children}
    </div>
  );
};

Alert.propTypes = {
  title: Proptypes.string,
  close: Proptypes.bool,
  warning: Proptypes.bool,
  success: Proptypes.bool,
  info: Proptypes.bool,
  danger: Proptypes.bool,
  children: Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node)
  ])
};

export default Alert;
