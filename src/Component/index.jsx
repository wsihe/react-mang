import React from 'react';
import {Link} from 'react-router';
import {is, fromJS} from 'immutable';
import {Tool} from '../Config/Tool';
import template from './common/template';
import Header from './common/head';
import Sider from './common/sider';
import MainTab from './common/tab';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      saleMoney:'',
    }
    this. _handleClick = this. _handleClick.bind(this)
    
  }

  componentWillMount() {
  }
    
  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }
    
  componentWillUpdate(nextProps,nextState){
    if (this.props !== nextProps) {
      let {data} = nextProps.state;
    }
  }
   
  render() {
    // let products = this.state.products;
    return (
      <div className="main-page">
        <Header title=''/>
        <Sider />
        <div className="main__content">
          <MainTab />
          <div className="main__container">
          </div>
        </div>
      </div>
    )
  }
    
  _handleClick() {
    console.log(this)
  }
    
  componentWillUnmount() {
    cancelAnimationFrame(this.state.requestID);
  }
}

export default template({
    id: 'index',
    component: Main,
    url: ''
});

