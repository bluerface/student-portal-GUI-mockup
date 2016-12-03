const React = require('react');

function Icon (props) {
  return (
    <span className={`icon ${props.small ? 'is-small' : ''}`}>
      <i className={`fa fa-${props.icon}`}></i>
    </span>
  );
}

module.exports = Icon;
