import React from 'react';
import {is, fromJS} from 'immutable';
import template from './template';
import Header from './head';
import Sider from './sider';
import MainTab from './tab';


class MainLayout extends React.Component {
  render() {
    // let products = this.state.products;
    return (
      <div className="main-page">
        <Header title=''/>
        <Sider />
        <div className="main__content">
          <MainTab />
          <div className="main__container">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
  
}

export default MainLayout
