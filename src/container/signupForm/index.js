import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import SignUpForm from "../../components/signupForm";
import { signUp } from "../../modules/auth";
import { toast } from "react-toastify";

class SignUpFormContainer extends React.Component {
  async handleSubmit(user) {
    await this.props.signUp(user);
    if (this.props.signUpError) return;
    toast.success("Conta criada com sucesso !!");
    this.props.history.push(`/login`);
  }

  render() {
    return (
      <SignUpForm
        user={{ name: "", email: "", password: "" }}
        loading={this.props.signingUp}
        handleSubmit={e => this.handleSubmit(e)}
        formErrors={
          this.props.signUpError ? this.props.signUpError.message : ""
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  signingUp: state.auth.signingUp,
  signUpError: state.auth.signUpError
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signUp
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer)
);
