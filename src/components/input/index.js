import React from 'react';
import Proptypes from 'prop-types';

const className = ({ error, touched }) => {
  if (error && touched) return 'has-error';
  if (!error && touched) return 'has-success';
  return '';
};

const Input = ({ error, touched, label, ...rest }) =>
  <div className={`form-group ${className({ error, touched })}`}>
    {label
      ? <label htmlFor={rest.name}>
          {label}
        </label>
      : null}
    <input className="form-control" {...rest} />
    {error &&
      touched &&
      <span className="help-block">
        {error}
      </span>}
  </div>;

Input.propTypes = {
  label: Proptypes.string,
  value: Proptypes.string,
  name: Proptypes.string,
  type: Proptypes.string,
  placeholder: Proptypes.string,
  id: Proptypes.string,
  onChange: Proptypes.func,
  error: Proptypes.string,
  touched: Proptypes.bool
};

export default Input;
