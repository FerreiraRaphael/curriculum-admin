import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../alert';

const Form = ({ className, children, formErrors, ...rest }) =>
  <form className={className || ''} {...rest}>
    {!!formErrors.length &&
      <Alert close danger>
        <ul>
          {Array.isArray(formErrors)
            ? formErrors.map((error, i) =>
                <li key={i}>
                  {error}
                </li>
              )
            : <li>
                {formErrors}
              </li>}
        </ul>
      </Alert>}
    {children}
  </form>;

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  formErrors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

export default Form;
