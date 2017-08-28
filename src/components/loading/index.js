import React from 'react';
import Proptypes from 'prop-types';
import './style.css';

const Alert = ({ size }) => {
  return (
    <div className="Loading">
      <i className="fa fa-circle-o-notch fa-spin" />
    </div>
  );
};

Alert.propTypes = {
  size: Proptypes.number
};

export default Alert;
