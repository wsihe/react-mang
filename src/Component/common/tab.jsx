import React from 'react';
import {Link, IndexLink} from 'react-router';
import {is, fromJS} from 'immutable';

class MainTab extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  
  render() {
    return (
      <div className="main__tab">
          <div className="tab__container">
              <div className="tab__item  active">
                  <span className="tab__title">Introduction</span>
                  <div title="关闭页面" className="tab-close">
                      <div className="close-icon"></div>
                  </div>
              </div>
              <div className="tab__item">
                  <span className="tab__title">Color-色彩</span>
                  <div title="关闭页面" className="tab-close">
                      <div className="close-icon"></div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default MainTab
