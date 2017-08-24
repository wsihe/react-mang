import React from 'react';
import {Link} from 'react-router';
import {is, fromJS} from 'immutable';
import {Tool} from '../Config/Tool';
import template from '../Component/common/template';

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
      <div className="page">
        <h1>react-many</h1>
        <p>Many pages for react (React多页签应用)</p>
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

