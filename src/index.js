import React from 'react';
import ReactDOM from 'react-dom';

import 'antd-mobile/dist/antd-mobile.css'; 
import './stylesheets/index.scss';


import App from './javascripts/App';

import registerServiceWorker from './registerServiceWorker';

import {Router,Route,IndexRedirect,hashHistory, Redirect, IndexRoute} from 'react-router'
import Home from './javascripts/components/Home'



let routes = <Router history={hashHistory}>
	<Route path="/" component={App}>
		 <IndexRoute component={Home}/>
	</Route>
</Router>

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
