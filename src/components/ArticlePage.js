const React = require('react');

const Menu = require('./Menu');
const ArticleCard = require('./ArticleCard');

function ArticlePage (props) {
  return (
    <div>
      <h1> Articles </h1>
      <div className='columns'>
        <Menu />
        <div className='column'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}

module.exports = ArticlePage;
