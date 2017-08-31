import React from "react";
import LoginFormContainer from "../../container/loginForm";

const LoginScreen = props =>
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6 col-md-offset-3">
        <LoginFormContainer />
      </div>
    </div>
  </div>;

export default LoginScreen;
