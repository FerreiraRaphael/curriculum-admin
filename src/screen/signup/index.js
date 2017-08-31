import React from "react";
import SignUpFormContainer from "../../container/signupForm";

const SignUpScreen = props =>
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6 col-md-offset-3">
        <SignUpFormContainer />
      </div>
    </div>
  </div>;

export default SignUpScreen;
