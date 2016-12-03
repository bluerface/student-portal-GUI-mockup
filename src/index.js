const React = require('react');
const ReactDOM = require('react-dom');
const {Router, Route, IndexRoute, browserHistory} = require('react-router');

const TimeTablePage = require('./components/TimeTablePage');
const App = require('./components/App');
const ArticlePage = require('./components/ArticlePage');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TimeTablePage} />
      <Route path='/articles' component={ArticlePage} />
    </Route>
  </Router>
), document.getElementById('app'));
