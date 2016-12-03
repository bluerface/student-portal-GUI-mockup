import React, { Component } from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

class NavItem extends Component {
  render () {
    const { router } = this.props;
    const { index, to, children } = this.props;

    let isActive;
    if (router.isActive('/', true) && index) isActive = true;
    else isActive = router.isActive(to);
    const LinkComponent = index ? IndexLink : Link;

    return (
      <li className={isActive ? 'is-active' : ''}>
        <LinkComponent {...this.props} to={to}>{children}</LinkComponent>
      </li>
    );
  }
}

NavItem = withRouter(NavItem);

module.exports = NavItem;
