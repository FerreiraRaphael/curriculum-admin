import React from "react";
import { Route, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import Home from "../home";
import Logout from "../logout";
import LoginScreen from "../../screen/login";
import SignupScreen from "../../screen/signup";
import WorksScreen from "../../screen/works";
import Nav from "../../components/nav";
import NavLink from "../../components/navlink";
import RedirectRoute from "../../components/redirectRoute";
import Loading from "../../components/loading";
import { loadUser } from "../../modules/auth";

class App extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn && localStorage.token) this.props.loadUser();
  }

  render() {
    return this.props.loading
      ? <Loading />
      : <div>
          <Nav brand="Home">
            {this.props.loggedIn
              ? [
                  <NavLink key="works" to="/works">
                    Trabalhos
                  </NavLink>,
                  <NavLink key="logout" to="/logout">
                    Logout
                  </NavLink>
                ]
              : [
                  <NavLink key="signup" to="/signup">
                    Cadastrar
                  </NavLink>,
                  <NavLink key="login" to="/login">
                    Login
                  </NavLink>
                ]}
          </Nav>

          <main>
            <ToastContainer
              position="bottom-left"
              type="default"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
            />
            <Route exact path="/" component={() => <Home />} />
            <Route
              exact
              path="/works"
              component={() =>
                <RedirectRoute
                  Element={<WorksScreen />}
                  to="/"
                  redirect={!this.props.loggedIn}
                />}
            />
            <Route
              exact
              path="/login"
              component={() =>
                <RedirectRoute
                  Element={<LoginScreen />}
                  to="/"
                  redirect={this.props.loggedIn}
                />}
            />
            <Route
              exact
              path="/logout"
              component={() =>
                <RedirectRoute
                  Element={<Logout />}
                  to="/login"
                  redirect={!this.props.loggedIn}
                />}
            />
            <Route
              exact
              path="/signup"
              component={() =>
                <RedirectRoute
                  Element={<SignupScreen />}
                  to="/"
                  redirect={this.props.loggedIn}
                />}
            />
          </main>
        </div>;
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.user,
  loading: state.auth.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadUser }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
