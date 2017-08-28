import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../modules/auth';

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  );

export default connect(() => ({}), mapDispatchToProps)(Logout);
