const React = require('react');

const MenuItem = require('./MenuItem')

function Menu (props) {
  return (
    <div className='column is-one-quarter'>
      <aside className="menu">

        <p className="menu-label">
          Importance / Type
        </p>
        <ul className="menu-list">
          <MenuItem checked> Core</MenuItem>
          <MenuItem> Further Reading</MenuItem>
          <MenuItem checked> Reference</MenuItem>
          <MenuItem checked> Documentation</MenuItem>
        </ul>

        <p className="menu-label">
          Topic
        </p>
        <ul className="menu-list">
          <MenuItem drop> Core JS</MenuItem>
          <MenuItem checked drop active> Front End</MenuItem>
          <li>
            <ul>
              <MenuItem> React</MenuItem>
              <MenuItem checked drop active> React Ecosystem</MenuItem>
              <li>
                <ul>
                  <MenuItem checked> Redux</MenuItem>
                  <MenuItem checked> React-redux</MenuItem>
                  <MenuItem checked> React-router</MenuItem>
                  <MenuItem> Redux-thunk</MenuItem>
                </ul>
              </li>
              <MenuItem> Superagent</MenuItem>
            </ul>
          </li>

          <MenuItem drop> Back End</MenuItem>
          <MenuItem drop> System</MenuItem>
          <MenuItem drop> Soft Skills</MenuItem>
        </ul>
      </aside>
    </div>
  );
}

module.exports = Menu;
