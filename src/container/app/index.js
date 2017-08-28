import React from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../home';
import About from '../about';
import Logout from '../logout';
import LoginScreen from '../../screen/login';
import Nav from '../../components/nav';
import Navlink from '../../components/navlink';
import RedirectRoute from '../../components/redirectRoute';
import Loading from '../../components/loading';
import { loadUser } from '../../modules/auth';

class App extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn && localStorage.token) this.props.loadUser();
  }

  render() {
    const location = this.props.location;

    return this.props.loading
      ? <Loading />
      : <div>
          <Nav brand="Home">
            <Navlink to="/about-us" active={location === '/about-us'}>
              About
            </Navlink>
            {this.props.loggedIn
              ? <Navlink to="/logout">Logout</Navlink>
              : <Navlink to="/login" active={location === '/login'}>
                  Login
                </Navlink>}
          </Nav>

          <main>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-6 col-md-offset-3">
                  <Route exact path="/" component={() => <Home />} />
                  <Route exact path="/about-us" component={About} />
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
                  <Route exact path="/logout" component={Logout} />
                </div>
              </div>
            </div>
          </main>
        </div>;
  }
}

const mapStateToProps = state => ({
  location: state.routing.location.pathname,
  loggedIn: !!state.auth.user,
  loading: state.auth.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
