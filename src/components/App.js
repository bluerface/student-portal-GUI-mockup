const React = require('react');

const NavItem = require('./NavItem');

function App (props) {
  return (
    <div>
      <h1 className='title is-2'> Northcoders Student Portal </h1>
      <nav className='tabs is-boxed'>
        <ul>
          <NavItem to='/' index onlyActiveOnIndex>Timetable</NavItem>
          <NavItem to='/articles'>Articles</NavItem>
        </ul>
      </nav>
      <div className='box'>
        {props.children}
      </div>
    </div>
  );
}

module.exports = App;
