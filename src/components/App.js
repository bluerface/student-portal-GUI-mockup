const React = require('react');
const {Link} = require('react-router');

function App (props) {
  return (
    <div>
      <h1> Northcoders Student Portal </h1>
      <h2>
        <Link to='/'>Timetable</Link>
        <Link to='/articles'>Articles</Link>
      </h2>
      <div className='box'>
        {props.children}
      </div>
    </div>
  );
}

module.exports = App;
