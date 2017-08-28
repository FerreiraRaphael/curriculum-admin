import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import Proptypes from 'prop-types';
import Form from '../../components/form';
import Button from '../../components/button';
import Input from '../../components/input';

const LoginForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
  formErrors
}) =>
  <div className="panel panel-default">
    <div className="panel-body">
      <h3>Faça seu Login</h3>
      <Form onSubmit={handleSubmit} formErrors={formErrors || []}>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          touched={touched.password}
        />
        <Button block text="Entrar" styled="success" loading={loading} />
      </Form>
    </div>
    <div className="panel-footer">
      <ul>
        <li>
          <a>Esqueceu sua senha ?</a>
        </li>
        <li>
          <a>Cadastrar</a>
        </li>
      </ul>
    </div>
  </div>;

LoginForm.propTypes = {
  login: Proptypes.shape({
    email: Proptypes.string.isRequired,
    password: Proptypes.string.isRequired
  }).isRequired,
  loading: Proptypes.bool,
  formErrors: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.arrayOf(Proptypes.string)
  ])
};

export default Formik({
  mapPropsToValues: props => ({
    email: props.login.email,
    password: props.login.password
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email não é valido').required('Insira um Email'),
    password: Yup.string().required('Insira uma Senha')
  }),
  handleSubmit: async (values, { props }) => {
    props.handleSubmit(values);
  }
})(LoginForm);
