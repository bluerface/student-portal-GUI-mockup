const React = require('react');

const Icon = require('./Icon');

function MenuItem (props) {
  return (
    <li>
      <a href='#'>
        {!props.checked && <Icon small icon='square-o' />}
        {props.checked && <Icon small icon='check-square-o' />}
        {props.active && <Icon small icon='caret-down' />}
        {!props.active && props.drop && <Icon small icon='caret-right' />}
        {' ' + props.children}
      </a>
    </li>
  );
}

module.exports = MenuItem;
