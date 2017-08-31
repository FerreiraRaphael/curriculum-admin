import React from "react";
import Proptypes from "prop-types";
import "./style.css";

const Loading = ({ size }) => {
  return (
    <div className="Loading">
      <i className="fa fa-circle-o-notch fa-spin" />
    </div>
  );
};

Loading.propTypes = {
  size: Proptypes.number
};

export default Loading;
