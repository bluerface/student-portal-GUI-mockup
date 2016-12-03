const React = require('react');

const Menu = require('./Menu');

function ArticlePage (props) {
  return (
    <div>
      <h1> Articles </h1>
      <div className='columns'>
        <Menu />
      </div>
    </div>
  );
}

module.exports = ArticlePage;
