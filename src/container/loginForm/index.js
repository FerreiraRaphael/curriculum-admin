import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../../components/loginForm';
import { login } from '../../modules/auth';

class LoginFormContainer extends React.Component {
  handleSubmit(login) {
    this.props.login(login);
  }

  render() {
    return (
      <LoginForm
        login={{ email: '', password: '' }}
        loading={this.props.logginIn}
        handleSubmit={e => this.handleSubmit(e)}
        formErrors={this.props.loginError ? this.props.loginError.message : ''}
      />
    );
  }
}

const mapStateToProps = state => ({
  loginError: state.auth.loginError,
  logginIn: state.auth.logginIn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
