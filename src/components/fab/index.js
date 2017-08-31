import React from "react";
import Proptypes from "prop-types";
import cs from "classnames";
import "./style.css";
import Menu from "./menu";
import MainButton from "./mainButton";
import ChildButton from "./childButton";

export { Menu, MainButton, ChildButton };

const FAB = ({
  bottomRight,
  bottomLeft,
  topRight,
  topLeft,
  styles,
  children,
  icon,
  mini
}) =>
  <button
    style={styles}
    className={`btn btn-default FAB ${cs({
      "FAB-bottomRight": bottomRight,
      "FAB-bottomLeft": bottomLeft,
      "FAB-topRight": topRight,
      "FAB-topLeft": topLeft,
      "FAB-mini": mini
    })}`}
  >
    <i className="material-icons">
      {icon}
    </i>
    {children}
  </button>;

FAB.defaultProps = {
  bottomRight: true,
  bottomLeft: false,
  topRight: false,
  topLeft: false
};

FAB.propTypes = {
  icon: Proptypes.string.isRequired,
  mini: Proptypes.bool,
  bottomRight: Proptypes.bool,
  bottomLeft: Proptypes.bool,
  topRight: Proptypes.bool,
  topLeft: Proptypes.bool,
  styles: Proptypes.object,
  children: Proptypes.oneOfType([
    Proptypes.node,
    Proptypes.arrayOf(Proptypes.node)
  ])
};
