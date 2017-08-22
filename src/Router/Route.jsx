import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import MainLayout from '../Component/common/mainLayout'

import index from '../pages/introduce'; //销售录入

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const colorDemo = (location, callback) => {
    require.ensure([], require => {
      callback(null, require('../pages/color').default)
    },'colorDemo')
}


const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={index} />
            <Route path="index" component={index} />
            <Route path="color" getComponent={colorDemo} />
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;