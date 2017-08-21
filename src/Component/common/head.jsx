import React from 'react';
import {Link, IndexLink} from 'react-router';
import {is, fromJS} from 'immutable';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  
  render() {
    return (
      <header className="head-list ">
        <div className="navbar clearfix">
          <div className="navbar__logo">
            <a href="javascript:void(0)" className="logo"></a>
          </div>
          <div className="navbar__collapse">
            <div className="navbar__search">
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header
