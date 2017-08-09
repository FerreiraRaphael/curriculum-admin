import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import { connect } from 'react-redux'

const App = (props) => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={(...args) => 
      {
        console.log(args, props)
        debugger
        return (<Home/>);
      }
      } />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

export default connect(
  mapStateToProps
)(App)
