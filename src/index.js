const React = require('react');
const ReactDOM = require('react-dom');
const {Router, Route, IndexRoute, browserHistory} = require('react-router');

const Test = require('./components/test');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Test} />
  </Router>
), document.getElementById('app'));
