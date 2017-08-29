import React from "react";
import { Redirect } from "react-router-dom";
import Proptypes from "prop-types";

const RedirectRoute = ({ Element, to, redirect }) => {
  return redirect ? <Redirect to={to} /> : Element;
};

RedirectRoute.propTypes = {
  Element: Proptypes.element.isRequired,
  to: Proptypes.string.isRequired,
  redirect: Proptypes.bool.isRequired
};

export default RedirectRoute;
