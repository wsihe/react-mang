import React from 'react';
import {Link, IndexLink} from 'react-router';
import {is, fromJS} from 'immutable';

class Sider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-expand">
          <div className="sidebar__item">
            <div className="sidebar__parent">
              <i  className="icon"></i>
              <span>Introduction</span>
              <div className="sidebar__item_nav">
                <i className="icon icon-sider-flex"></i>
              </div>
            </div>
          </div>
          <div className="sidebar__item">
            <div className="sidebar__parent">
              <i className="icon icon-customer"></i>
              <span >Basic</span>
              <div className="icon-expand"></div>
            </div>
            <ul className="menu">
              <li className="menu__list">
                <span >Color 色彩</span></li>
              <li className="menu__list">
                <span >Button 按钮</span></li>
            </ul>
          </div>
        </div>
      </div>  
    );
  }
}

export default Sider
