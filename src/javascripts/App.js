import React, { Component } from 'react'
import Header from './components/header'
import Banner from './components/banner'
import Sidebar from './components/sidebar'


//import logo from '../assets/logo.svg';
class App extends Component {
	render(){
		return (
			<div>
				<Sidebar/>
				<Banner/>
			</div>
		);
	}
}

export default App;
