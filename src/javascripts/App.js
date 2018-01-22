import React, { Component } from 'react'
import Header from './components/header'
import Banner from './components/banner'
import Sidebar from './components/sidebar'
import Content from './components/content'


//import logo from '../assets/logo.svg';
class App extends Component {
	render(){
		return (
			<div>
				<Sidebar/>

				{this.props.children}
			</div>
		);
	}
}

export default App;
