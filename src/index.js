import React from 'react';
import ReactDOM from 'react-dom';

import 'antd-mobile/dist/antd-mobile.css'; 
import './stylesheets/index.scss';


import App from './javascripts/App';

import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'



// let routes = <Router history={hashHistory}>
// 	<Route path="/" component={App}>
// 		<IndexRedirect to="home"/>
// 		<Route path="home" component={Home}/>
// 		<Redirect from="*" to="home"/>
// 	</Route>
// </Router>

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
