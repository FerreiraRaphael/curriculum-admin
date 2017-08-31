import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Yup from "yup";
import Proptypes from "prop-types";
import Form from "../../components/form";
import Button from "../../components/button";
import Input from "../../components/input";

const SignUpForm = ({
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
      <h3>Faça seu Cadastro</h3>
      <Form onSubmit={handleSubmit} formErrors={formErrors || []}>
        <Input
          type="name"
          placeholder="Nome"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          touched={touched.name}
        />
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
        <Button block text="Cadastrar" styled="success" loading={loading} />
      </Form>
    </div>
    <div className="panel-footer">
      <ul>
        <li>
          <Link to="/login">Já tem uma conta ? Faça o Login</Link>
        </li>
      </ul>
    </div>
  </div>;

SignUpForm.propTypes = {
  user: Proptypes.shape({
    name: Proptypes.string.isRequired,
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
    name: props.user.name,
    email: props.user.email,
    password: props.user.password
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Insira um Nome"),
    email: Yup.string().email("Email não é valido").required("Insira um Email"),
    password: Yup.string().required("Insira uma Senha")
  }),
  handleSubmit: (values, { props }) => {
    props.handleSubmit(values);
  }
})(SignUpForm);
