import React from 'react';
import ReactDOM from 'react-dom';

import 'antd-mobile/dist/antd-mobile.css'; 
import './stylesheets/index.scss';


import App from './javascripts/App';

import registerServiceWorker from './registerServiceWorker';

import {Router, Route, IndexRedirect, browserHistory, hashHistory, Redirect, IndexRoute} from 'react-router'
import Home from './javascripts/components/Home'
import Film from './javascripts/components/Film'
import Movie from './javascripts/components/Movie'
import Mine from './javascripts/components/Mine'
import Login from './javascripts/components/Mine/login'
import Register from './javascripts/components/Mine/register'


import Detail from './javascripts/components/Detail'

import City from './javascripts/components/city'



let routes = <Router history={hashHistory}>
	<Route path="/" component={App}>
		 <IndexRoute component={Home}/>
		 <Route path="/detail/:id" component={Detail}/>
		 <Route path="/film" component={Film}/>
		 <Route path="/movie" component={Movie}/>
		 <Route path="/mine" component={Mine}>
		 	<Route path="login" component={Login}/>
		 	<Route path="register" component={Register}/>
		 </Route>
		 <Route path="/city" component={City}/>
	</Route>
</Router>

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
