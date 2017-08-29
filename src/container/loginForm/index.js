import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import LoginForm from "../../components/loginForm";
import { login } from "../../modules/auth";
import { transformSearch } from "../../lib/helpers";
import { toast } from "react-toastify";

class LoginFormContainer extends React.Component {
  async handleSubmit(login) {
    await this.props.login(login);
    if (!this.props.loginError) toast.success("Login realizado com sucesso !!");
  }

  render() {
    return (
      <LoginForm
        login={{ email: this.props.email || "", password: "" }}
        loading={this.props.logginIn}
        handleSubmit={e => this.handleSubmit(e)}
        formErrors={this.props.loginError ? this.props.loginError.message : ""}
      />
    );
  }
}

const mapStateToProps = ({ auth }, { location }) => ({
  loginError: auth.loginError,
  logginIn: auth.logginIn,
  email: transformSearch(location.search).email
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
);
